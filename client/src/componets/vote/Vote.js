import React, { useState } from 'react';
import VoteForm from './VoteForm';
function Vote() {
  const [voted, setVoted] = useState(false);

  return (
    <div className='vote'>
      {voted ? (
        <div className='votetrue'>
          <p>Thank you for your Vote!</p>
        </div>
      ) : (
        <VoteForm setVoted={setVoted} />
      )}
    </div>
  );
}

export default Vote;
