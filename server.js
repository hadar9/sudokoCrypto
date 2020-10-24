const express = require('express');
const fs = require('fs');
const{ init,randindex,checkrow,checkcol} =require('./functions.js');


const app = express();
app.use(express.json({extended:false}));


app.post('/verify', async (req, res) =>{
    const data = await fs.readFileSync(`${__dirname}/data.json`,'utf-8');
    const tojsobject =JSON.parse(data);
    const board=tojsobject["board"];
    const howmanyanswers=tojsobject["howmanyanswers"];
    const [lastrow,lastcol] = tojsobject["lastindex"];
    const answer = Number(req.body.number);

  
    //check if there is a problem with the answer
    if(checkrow(board,lastrow,answer)===-1 || checkcol(board,lastcol,answer)===-1)
    {
       return res.status(400).send('Fail');
    }
    else{
    
    //return new question
    if(howmanyanswers>3){
        init();
       return  res.status(200).send('Sucsses');
    }
    else{
    //coosing a new index to ask about it
    board[lastrow][lastcol]=answer;
    let indexs=randindex(board);
    let lastindexAndHowAns={"lastindex":indexs,"howmanyanswers":howmanyanswers+1,"board":board};
    //saving to know which index was asked and how many answers were
    await fs.writeFileSync(`${__dirname}/data.json`,JSON.stringify(lastindexAndHowAns));
    
    //sending the question about the index
    let[row,col]=indexs;
    return res.status(200).send(`what number in row :${row} and colum:${col}?`);
}
    }
}
);

const port = process.env.Port || 5000;

app.listen(port,(req,res) => {
    console.log(`Server listening on port ${port}!`);
})




