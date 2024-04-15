import React, { useState } from 'react';

const UnControlled = () => {

  const [toggler, setToggler] = useState<boolean>(false);

  const changeTogglerHandler = () => setToggler(prev => !prev);

  const container = {
    marginTop: '20px',
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  }

  const onStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    backgroundColor: toggler ? 'green' : 'white',
  };

  const offStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    backgroundColor: !toggler ? 'red' : 'white',
  };

  const indicatorStyle = {
    width: '15px',
    height: '15px',
    borderRadius: '5px',
    border: '1px solid black',
    backgroundColor: toggler ? 'green' : 'red',
  };

  return (
    <div style={container}>
      <div style={onStyle}>On</div>
      <div style={offStyle}>Off</div>
      <button style={indicatorStyle} onClick={changeTogglerHandler}></button>
    </div>
  )
}

export default UnControlled;