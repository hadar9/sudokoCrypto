import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { answer } from '../../actions/index';

function Question({ answer, state: { question } }) {
  const [comState, setState] = useState({
    number: '',
    valueError: '',
  });

  const { number, valueError } = comState;

  const onchange = (e) => {
    setState({ ...comState, number: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    if (number < 1 || number > 9) {
      setState({
        ...comState,
        number,
        valueError: 'enter a number between 1-9',
      });
    } else {
      answer(number);
      setState({
        ...comState,
        number: '',
        valueError: '',
      });
    }
  };

  return (
    <>
      <div className='questiontext'>
        <p>{question}</p>
      </div>
      <>
        <Form id='verifyanswer' inline>
          <Form.Label className='mb-2 mr-sm-2' htmlFor='inlineFormInputName2'>
            Answer:
          </Form.Label>
          <Form.Control
            className='mb-2 mr-sm-2 w-25'
            id='inlineFormInputName2'
            placeholder='1-9'
            value={number}
            onChange={(e) => onchange(e)}
          />
          <Button type='submit' className='mb-2' onClick={(e) => onsubmit(e)}>
            Sumbit
          </Button>
        </Form>
      </>
      <div className='valuerror'>
        <p>{valueError}</p>
      </div>
    </>
  );
}

Question.propTypes = {
  answer: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, { answer })(Question);
