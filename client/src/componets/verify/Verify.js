import React from 'react';
import Vote from '../vote/Vote';
import Question from './Question';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MyTable } from './MyTable';

function Verify({ state: { clientBoard, serverBoard, question } }) {
  if (question === 'Sucsses') {
    return <Vote />;
  } else if (question === 'Fail') {
    return (
      <div className='fail'>
        <h1>Fail</h1>
      </div>
    );
  } else {
    return (
      <div className='verify'>
        <p className='text'>
          First answer some questions about the game in order to vote
          <br></br>our game is Suduko!!!
        </p>
        <MyTable board={clientBoard} type='clientBoard' />
        <MyTable board={serverBoard} type='serverBoard' />
        <Question />
      </div>
    );
  }
}
Verify.propTypes = {
  state: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, {})(Verify);
