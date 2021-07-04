import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Landing() {
  return (
    <div className='landing'>
      <Link to='/verify'>
        <Button className='mt-5' size='lg' variant='primary'>
          Click to vote
        </Button>
      </Link>
    </div>
  );
}

export default Landing;
