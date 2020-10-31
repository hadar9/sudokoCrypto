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
        init();
        let tosend={msg:'Fail',board:board}
        return res.status(200).json(tosend);
    }
    else{
    console.log(howmanyanswers);
    //return new question
    if(howmanyanswers>3){
        init();
        let tosend={msg:'Sucsses',board:board}
        return res.status(200).json(tosend);
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
    let tosend={msg:`what number in row :${row} and colum:${col}?`,board:board}
    return res.status(200).json(tosend);
}
    }
}
);
const port = process.env.Port || 5000;

app.listen(port,(req,res) => {
    console.log(`Server listening on port ${port}!`);
})




