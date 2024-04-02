type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating({ value }: RatingPropsType) {
  console.log('Rating rendered')

  return (
    <div>
      <Star selected={ value > 0 }/>
      <Star selected={ value > 1 }/>
      <Star selected={ value > 2 }/>
      <Star selected={ value > 3 }/>
      <Star selected={ value > 4 }/>
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
      { selected ? (<b>star </b>) : 'star '  }
    </span>
  )
}