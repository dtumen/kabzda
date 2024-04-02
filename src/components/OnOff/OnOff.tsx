import React from 'react';

type OnOffPropsType = {
  toggler: boolean
}

const OnOff = ({ toggler }: OnOffPropsType) => {
  let bcgColor = toggler ? 'green' : 'red' ;

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <div style={{ backgroundColor: toggler && 'green' }}>On</div>
      <div style={{ backgroundColor: !toggler && 'red' }}>Off</div>
      <button style={{ backgroundColor: bcgColor, borderRadius: '50%', }}></button>
    </div>
  )
}

export default OnOff;