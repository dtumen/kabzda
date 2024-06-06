import React, { MouseEvent } from 'react';
import { RatingValueType } from '../../App';

type RatingPropsType = {
  rating: RatingValueType;
  handleRatingChange: (value: RatingValueType) => void;
}

export const Rating: React.FC<RatingPropsType> = ({ rating, handleRatingChange }) => {
  console.log('Rating rendered')

  return (
    <div>
        {
            [1, 2, 3, 4, 5].map(value => (
                <Star key={value}
                      value={value as RatingValueType}
                      selected={rating >= value}
                      onClick={handleRatingChange} />
            ))
        }
    </div>
  )
}

export type StarPropsType = {
  selected: boolean;
  value: RatingValueType;
  onClick: (value: RatingValueType) => void;
}

export function Star({ selected, onClick, value }: StarPropsType) {
  console.log('Star rendered')

    const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
      onClick(value)
    }

  return (
    <span onClick={handleClick}>
      { selected ? (<b>star </b>) : 'star '  }
    </span>
  )
}