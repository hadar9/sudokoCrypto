import React,{useState,useEffect} from 'react';
import nl2br from 'react-newline-to-break';
import { Button,Form,Table} from 'react-bootstrap';
import axios from 'axios';
import Vote from './Vote'


function Verify() {

  const [formdata,setdata]=useState({
    number:"",
    question:'what number in row :0 , colum: 0 ?',
    valuerror:"",
    clientboard:[[2,9,6,3,1,8,5,7,4],[5,8,4,9,7,2,6,1,3],[7,1,3,6,4,5,2,8,9],[6,2,5,8,9,7,3,4,1],[9,3,1,4,2,6,8,5,7],[4,7,8,5,3,1,9,2,6],[1,6,7,2,5,3,4,9,8],[8,5,9,7,6,4,1,3,2],[3,4,2,1,8,9,7,6,5]],
    serverboard:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
  });
  
  const {number,question,valuerror,clientboard,serverboard}=formdata;
  const text=`First answer some questions about the game in order to continue...\nour game is Suduko!!!`
  
  //functions
  const onchange= e =>{
    setdata({...formdata,number:e.target.value});
  }

  const onsubmit= async e =>{
    e.preventDefault();
    const number = formdata.number;
    if(number<1 ||number>9)
    {
      setdata({...formdata,number:number,valuerror:"you need to enter a number between 1-9"});
    }
    else{
      const config = {
        headers:{
          'Content-Type':'application/json'
        }
      }
      const body = JSON.stringify({"number":number});
      try{
      let res = await axios.post('/verify',body,config);
      let {msg,board}=res.data;
      setdata({...formdata,question:msg,serverboard:board,number:"",valuerror:""});
      }
      catch(e){
        console.error(e.response.data);
      }

    }
  }
  useEffect(()=>{console.log(formdata)},[formdata]);
  
  if(formdata.question==='Sucsses'){
    return (<Vote/>)
  }
    else if(formdata.question==='Fail'){
      return ( <div className="fail"> <h1>Fail</h1></div>)
    }
    else{
      return (
        <div className="verify">
              <div className="text">
              {nl2br(text)}
            </div>
              <Table className="clientboard">
                <thead>
                  <tr>
            <th>row/colum</th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th id="th3">3</th>
            <th>4</th>
            <th>5</th>
            <th id="th6">6</th>
            <th>7</th>
            <th>8</th>
             </tr>
            </thead>
            <tbody>
{
  formdata.clientboard.map(row=><tr id={`row-${formdata.clientboard.indexOf(row)}`}><strong>{formdata.clientboard.indexOf(row)}</strong>{row.map(col=><td id={`col-${row.indexOf(col)}`}>{col}</td>)}</tr>)
}
                </tbody>
              </Table>

              <Table className="serverboard">
                <thead>
                  <tr>
            <th>row/colum</th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th id="th3">3</th>
            <th>4</th>
            <th>5</th>
            <th id="th6">6</th>
            <th>7</th>
            <th>8</th>
             </tr>
            </thead>
            <tbody>
{
  formdata.serverboard.map(row=><tr id={`row-${formdata.serverboard.indexOf(row)}`}><strong>{formdata.serverboard.indexOf(row)}</strong>{row.map(col=>col!==0?<td id={`col-${row.indexOf(col)}`}>{col}</td>:<td id={`col-${row.indexOf(col)}`}>{""}</td>)}</tr>)
}
</tbody>
              </Table>
              <div className="questiontext">
              <p>{formdata.question}</p>
              </div>
          <div className="col-md-5 offset-md-4"> 
        <Form id="verifyanswer" inline>
        <Form.Label className="mb-2 mr-sm-2" htmlFor="inlineFormInputName2">
          Answer:
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="1-9"
          value={number}
          onChange={e=>onchange(e)}
        />
        <Button type="submit" className="mb-2" onClick={e=>onsubmit(e)}>
          Sumbit
        </Button>
        </Form>
      </div>
        <div className="valuerror">
        <p>{formdata.valuerror}</p>
        </div>
      </div>)
  }
}

export default Verify;
