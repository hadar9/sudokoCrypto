const { resolveAny } = require('dns');
const express = require('express');
const fs = require('fs');
const { init, randIndex, checkRow, checkCol } = require('./functions.js');

const app = express();
app.use(express.json({ extended: false }));

app.post('/verify', async (req, res) => {
  try {
    const data = await fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
    const toJsObject = JSON.parse(data);
    const board = toJsObject['board'];
    const howManyAnswers = toJsObject['howManyAnswers'];
    const [lastRow, lastCol] = toJsObject['lastIndex'];
    const answer = Number(req.body.number);

    //check if there is a problem with the answer
    if (
      checkRow(board, lastRow, answer) === -1 ||
      checkCol(board, lastCol, answer) === -1
    ) {
      init();
      let tosend = { msg: 'Fail', board: board };
      return res.status(200).json(tosend);
    } else {
      //return new question
      if (howManyAnswers > 4) {
        init();
        let tosend = { msg: 'Sucsses', board: board };
        return res.status(200).json(tosend);
      } else {
        //coosing a new index to ask about it
        board[lastRow][lastCol] = answer;
        let indexs = randIndex(board);
        let lastIndexAndHowAns = {
          lastIndex: indexs,
          howManyAnswers: howManyAnswers + 1,
          board: board,
        };
        //saving to know which index was asked and how many answers were
        await fs.writeFileSync(
          `${__dirname}/data.json`,
          JSON.stringify(lastIndexAndHowAns)
        );

        //sending the question about the index
        let [row, col] = indexs;
        let tosend = {
          msg: `what number in row :${row} and colum:${col}?`,
          board: board,
        };
        return res.status(200).json(tosend);
      }
    }
  } catch (e) {
    return res.status(500).send('Server Error!');
  }
});
const port = process.env.Port || 5000;

app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}!`);
});
