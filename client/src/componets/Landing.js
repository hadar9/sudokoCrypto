import React from 'react';
import {
  Link
} from "react-router-dom";


function Landing() {
  return (
    <div className="landing">
    <Link to="/verify" className="btn btn-dark">click to vote</Link>    
    </div>
  );
}

export default Landing;
