import React from 'react';
import './userOutput.css'

const userOutput = (props) => {
  return(
    <div className ="card">
      <p>hello There!! </p>
      <p>This is my first React assignment!! </p>
      <p>Username: {props.userName}</p>
  </div>
  )
}

export default userOutput;