import React, {useMemo, useState} from 'react';
import {Meta, StoryObj} from '@storybook/react';

const meta: Meta = {
    title: 'React/useMemo',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj;

export const DifficultCountingExample: StoryObj = {
    parameters: {
        layout: 'centered',
    },

    render: () => {
        const [a, setA] = useState<number>(5);
        const [b, setB] = useState<number>(5);

        let resultA = 1;
        let resultB = 1;

        resultA = useMemo(() => {
            let tempResultA = 1;
            for (let i = 1; i <= a; i++) {
                let fake = 0;
                while (fake < 1000000) {
                    fake++;
                    const fakeValue = Math.random()
                }
                tempResultA = tempResultA * i
            }
            return tempResultA;
        }, [a]);


        for (let i = 1; i <= b; i++) {
            resultB *= i;
        }

        return <>
            <div style={styles.inputsContainer}>
                A: <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
                B: <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            </div>
            <hr/>
            <div style={styles.result}>
                Result for A: {resultA}
            </div>
            <div>
                Result for B: {resultB}
            </div>
        </>
    }
}

type StyleTYpe = {
    inputsContainer: React.CSSProperties
    result: React.CSSProperties
}

const styles: StyleTYpe = {
    inputsContainer: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
    },

    result: {
        marginBottom: '10px',
        marginTop: '20px'
    }
}