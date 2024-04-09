import { MouseEvent, useState } from 'react'

type ValueNumber = 0 | 1 | 2 | 3 | 4 | 5;

export function UnControlledRating() {

  const [value, setValue] = useState<ValueNumber>(0);

  const setValueHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const newValue = Number(e.currentTarget.textContent);
    if (newValue >= 0 && newValue <= 5) {
      setValue(newValue as ValueNumber);
    }
  }

  const containerStyle = {
    marginTop: '20px'
  }

  return (
    <div style={containerStyle}>
      <Star selected={value > 0} />
      <button onClick={setValueHandler}>1</button>
      <Star selected={value > 1} />
      <button onClick={setValueHandler}>2</button>
      <Star selected={value > 2} />
      <button onClick={setValueHandler}>3</button>
      <Star selected={value > 3} />
      <button onClick={setValueHandler}>4</button>
      <Star selected={value > 4} />
      <button onClick={setValueHandler}>5</button>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
}

function Star({ selected }: StarPropsType) {
  console.log('Star rendered')

  return (
    <span>
      {selected ? (<b>star </b>) : 'star '}
    </span>
  )
}