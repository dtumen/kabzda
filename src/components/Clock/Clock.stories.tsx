import type {Meta, StoryObj} from '@storybook/react';
import {Clock} from './Clock';

const meta: Meta = {
    title: 'Homework/Clock',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const DigitalClock: Story = {
    parameters: {
        layout: 'centered',
    },
    render: () => {
        return (
            <Clock />
        )
    }
}