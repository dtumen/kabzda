import type {Meta, StoryObj} from '@storybook/react';

import {useState} from 'react';

const meta: Meta = {
    title: 'React/useState',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;


export const Counter: Story = {
    parameters: {
      layout: 'centered',
    },

    render: () => {
        const [counter, setCounter] = useState(0);

        return (
            <div style={styles.container}>
                <button style={styles.btn}
                        onClick={() => setCounter(prev => prev + 1)}
                >
                    +
                </button>
                {counter}
            </div>

        )
    }
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },
    btn: {
        width: '50px',
        height: '30px',
        backgroundColor: '#0888da',
        color: '#d2cbcb',
    }
}