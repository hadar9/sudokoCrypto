import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';

export default function VoteForm({ setVoted }) {
  const [state, setstate] = useState(null);
  const handleOnClick = (e) => {
    e.preventDefault();
    if (state) setVoted(true);
  };
  return (
    <div className='votefalse'>
      <Form id='voteimages' onSubmit={(e) => handleOnClick(e)}>
        <Form.Group>
          <fieldset>
            <Row>
              <Col>
                <img src={img1} alt='BibiImage'></img>
                <Form.Check
                  label='ביבי נתניהו'
                  name='group1'
                  type='radio'
                  id='radio-Bibi'
                  value='Bibi'
                  onChange={(e) => setstate(e.target.value)}
                />
              </Col>

              <Col>
                <img src={img2} alt='BenentImage'></img>
                <Form.Check
                  label='בנט'
                  name='group1'
                  type='radio'
                  id='inline-radio-Benet'
                  value='Benet'
                  onChange={(e) => setstate(e.target.value)}
                />
              </Col>
              <Col>
                <img src={img3} alt='AyeletImage'></img>
                <Form.Check
                  label='איילת שקד'
                  name='group1'
                  type='radio'
                  id='radio-Ayelet'
                  value='Ayelet'
                  onChange={(e) => setstate(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={img4} alt='GanzImage'></img>
                <Form.Check
                  label='גנץ'
                  name='group1'
                  type='radio'
                  id='radio-Ganatz'
                  value='Ganatz'
                  onChange={(e) => setstate(e.target.value)}
                />
              </Col>
              <Col>
                <img src={img5} alt='YairImage'></img>
                <Form.Check
                  label='יאיר לפיד'
                  name='group1'
                  type='radio'
                  id='radio-Yair'
                  value='Yair'
                  onChange={(e) => setstate(e.target.value)}
                />
              </Col>
            </Row>
          </fieldset>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Vote
        </Button>
      </Form>
    </div>
  );
}
