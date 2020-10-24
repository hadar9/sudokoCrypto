
const fs = require('fs');

module.exports={
init : async function (){
    let board= [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
    let lastindexAndHowAns={"lastindex":[0,0],"howmanyanswers":0,"board":board};
    await fs.writeFileSync(`${__dirname}/data.json`,JSON.stringify(lastindexAndHowAns));
},

randindex :function (board){
let row =Math.floor(Math.random() * Math.floor(9));
let col= Math.floor(Math.random() * Math.floor(9));
while(board[row][col]!==0){
    row = Math.floor(Math.random() * Math.floor(9));
    col = Math.floor(Math.random() * Math.floor(9));
}
return [row,col];
},

checkrow: function(board,row,answer){
    for(let i=0;i<9;i++)
    {
        if(board[row][i]===answer)
            return -1;
    }
    return 0;
},

checkcol :function (board,col,answer){
    for(let i=0;i<9;i++)
    {
        if(board[i][col]===answer)
            return -1;
    }
    return 0;
}
}

