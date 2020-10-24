import React,{useState} from 'react';
import { Button,Form} from 'react-bootstrap';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';

function Vote() {

  const [formdata,setdata]=useState({
    voted:false
  });
  const voted = formdata.voted;
  const onclick = e =>{
    e.preventDefault();
    setdata({...formdata,voted:true});

  }
  return (
    <div className="vote">
      {voted === true ? 
      <div className="votetrue">
        <div className="votetext">
        <p>Thank you for your Vote</p>
        </div>
        </div> :
<div className="votefalse">
<Form>
  <Form.Row>
  <Form.Group id="formGridCheckbox">
    <img src={img1}></img>
    <Form.Check type="checkbox" label="ביבי נתניהו" />
  </Form.Group>
 
  <Form.Group id="formGridCheckbox">
  <img src={img2}></img>
    <Form.Check type="checkbox" label="בנט" />
  </Form.Group>

  <Form.Group id="formGridCheckbox">
  <img src={img3}></img>
    <Form.Check type="checkbox" label="איילת שקד" />
  </Form.Group>
 
   <Form.Group id="formGridCheckbox">
   <img src={img4}></img>
   <Form.Check type="checkbox" label="גנץ" />
 </Form.Group>

  <Form.Group id="formGridCheckbox">
  <img src={img5}></img>
    <Form.Check type="checkbox" label="יאיר לפיד" />
  </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit" onClick={e=>onclick(e)}>
    Submit
  </Button>
</Form>
    </div>
  }
  </div>
  );
}

export default Vote;
