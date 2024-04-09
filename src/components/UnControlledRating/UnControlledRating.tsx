import { useState } from 'react'

export function UnControlledRating() {

  type StarsType = {
    id: number
    selected: boolean
  }

  const [stars, setStars] = useState<StarsType[]>([
    {id: 1, selected: false},
    {id: 2, selected: false},
    {id: 3, selected: false},
    {id: 4, selected: false},
    {id: 5, selected: false},
  ])

  const onClickStarHandler = (id: number) => {
    const newStars = stars.map(s => ({ id: s.id, selected: s.id <= id }));
    setStars([...newStars]);
  }


  const containerStyle = {
    marginTop: '20px'
  }

  return (
    <div style={containerStyle}>
      {stars.map(s => <Star key={s.id} id={s.id} selected={s.selected} onClickStarHandler={onClickStarHandler}/>)}
    </div>
  )
}

type StarPropsType = {
  id: number
  selected: boolean
  onClickStarHandler: (id: number) => void;
}

function Star({ selected, onClickStarHandler, id }: StarPropsType) {
  console.log('Star rendered')

  return (
    <span onClick={() => onClickStarHandler(id)}>
      {selected ? (<b>star </b>) : 'star '}
    </span>
  )
}