import type {Meta, StoryObj} from '@storybook/react';

import {useState} from 'react';

const meta: Meta = {
    title: 'React/useEffect',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Counter: Story = {
    render: () => {
        return (
            <div>useEffect</div>
        )
    }
}