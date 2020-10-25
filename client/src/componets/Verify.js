import React,{useState,useEffect} from 'react';
import nl2br from 'react-newline-to-break';
import image from '../img/board.png'
import { Button,Form} from 'react-bootstrap';
import axios from 'axios';
import Vote from './Vote'


function Verify() {

  const [formdata,setdata]=useState({
    number:"",
    question:'what number in row :0 , colum: 0 ?',
    valuerror:""
  });
  
  const {number,question}=formdata;
  const text=`First answer some questions about the game in order to continue...\nour game is Suduko!!!`
  
  //functions
  const onchange= e =>{
    setdata({...formdata,number:e.target.value});
  }

  const onsubmit= async e =>{
    e.preventDefault();
    const number = formdata.number;
    if(number<0 ||number>9)
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
      setdata({...formdata,question:res.data,number:"",valuerror:""});
      
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
              <img src={image}></img>
              <div className="questiontext">
              <p>{formdata.question}</p>
              </div>
          <div className="col-md-5 offset-md-4"> 
        <Form inline>
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
