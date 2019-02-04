import React from 'react';

const userInput = (props) => {
  const style = {
      border: '3px solid red',
      color: 'blue',
      padding: '6px',
      fontSize: '18px',
  }
  return(
    <input 
      style = {style}
      type="text" 
      onChange={props.change} 
      value ={props.currentName}
    />
  )
}

export default userInput;