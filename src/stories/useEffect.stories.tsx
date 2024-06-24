import type {Meta, StoryObj} from '@storybook/react';

import {useEffect, useState, CSSProperties} from 'react';

const meta: Meta = {
    title: 'React/useEffect',
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
        const [title, setTitle] = useState<string | number>('Nothing');

        useEffect(() => {
            setTitle(counter)
        }, [counter]);

        return (
            <div style={styles.container}>
                <div>
                    <button style={styles.button} onClick={() => setCounter(prev => prev +1)}>+</button>
                    { counter }
                </div>
                <div>Представим, что мы меняем title страницы</div>
                Title: { title }
            </div>
        )
    }
};

const styles: { container: CSSProperties, button: CSSProperties  } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    button: {
        width: '100px',
    }
}


export const SetTimeoutExample: Story = {
    parameters: {
        layout: 'centered',
    },

    render: () => {
        const [counter, setCounter] = useState(0);
        const [fake, setFake] = useState(0);

        console.log('SetTimeout Example');

        useEffect(() => {
            setTimeout(() => {
                console.log('setTimeout');
                document.title = counter.toString();
            }, 1000)
        }, [counter]);

        return (
            <div>
                Hello: {counter}, {fake}
                <button onClick={() => setCounter(prev => prev + 1)} >counter+</button>
                <button onClick={() => setFake(prev => prev + 1)} >fake+</button>
            </div>
        )
    }
}