import React from 'react';
import Vote from '../vote/Vote';
import Question from './Question';
import { useSelector } from 'react-redux';
import { MyTable } from './MyTable';

export default function Verify() {
  const clientBoard = useSelector((state) => state.rootReducer.clientBoard);
  const serverBoard = useSelector((state) => state.rootReducer.serverBoard);
  const question = useSelector((state) => state.rootReducer.question);

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
