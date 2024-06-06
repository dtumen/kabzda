import React, { useState } from 'react';

const UnControlled = () => {

  const [isToggle, setToggle] = useState<boolean>(false);

  const handleToggleChange = () => setToggle(prev => !prev);

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
    backgroundColor: isToggle ? 'green' : 'white',
  };

  const offStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    backgroundColor: !isToggle ? 'red' : 'white',
  };

  const indicatorStyle = {
    width: '15px',
    height: '15px',
    borderRadius: '5px',
    border: '1px solid black',
    backgroundColor: isToggle ? 'green' : 'red',
  };

  return (
    <div style={container}>
      <div style={onStyle}>On</div>
      <div style={offStyle}>Off</div>
      <button style={indicatorStyle} onClick={handleToggleChange}></button>
    </div>
  )
}

export default UnControlled;