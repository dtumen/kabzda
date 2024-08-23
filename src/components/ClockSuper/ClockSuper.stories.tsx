import type {Meta, StoryObj} from '@storybook/react';
import {ClockSuper} from './ClockSuper';

const meta: Meta = {
    title: 'Homework/ClockSuper',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const BasicClock: Story = {
    parameters: {
        layout: 'centered',
    },
    render: () => <ClockSuper title="Belgrade" datediff={0}/>
}

export const GroupClock: Story = {
    parameters: {
        layout: 'centered',
    },
    render: () => {
        return (
            <div style={{ display: 'flex', gap: '10px' }}>
                <ClockSuper title="Belgrade" datediff={0}/>
                <ClockSuper title="Ulan-Ude" datediff={6}/>
                <ClockSuper title="Moscow" datediff={1}/>
            </div>
        )
    }
}