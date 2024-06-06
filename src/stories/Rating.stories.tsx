import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Rating} from '../components/Rating/Rating';
import React, {useState} from 'react';
import {RatingValueType} from '../App';

const meta: Meta<typeof Rating> = {
    component: Rating,
};

export default meta;

export const DefaultRating = () => {
    return (
        <Rating rating={0} handleRatingChange={() => {}} />
    )
}

export const RatingIsSelected = () => {
    return (
        <Rating rating={5} handleRatingChange={(x) => (x)} />
    )
}

export const RatingIsInteractive = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(1);

    const setValueHandler = (value: RatingValueType) => {
        action('ratingValue:');
        setRatingValue(value);
    };

    return (
        <Rating rating={ratingValue} handleRatingChange={setValueHandler} />
    )
}