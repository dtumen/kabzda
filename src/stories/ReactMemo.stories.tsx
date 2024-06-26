import type {Meta, StoryObj} from '@storybook/react';


import React, {useState} from 'react';


const meta: Meta = {
    title: 'React/memo',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UserSecret component render')
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {props.users && props.users.map((u: string, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret);

export const CounterExample: Story = {
    parameters: {
        layout: 'centered',
    },
    render: () => {

        const [count, setCount] = useState(0);
        const [users, setUsers] = useState(['John, Adam, Michel']);

        const addUser = () => {
            setUsers([...users, 'Sveta'])
        }

        return (
            <div style={styles.container}>
                <div style={styles.counter}>
                    <button style={styles.button} onClick={() => setCount(count + 1)}>+</button>
                    {count}
                    <button style={styles.button} onClick={addUser}>addUser</button>
                </div>
                <Users users={users}/>
            </div>
        )
    }
}

type StylesType = {
    container: React.CSSProperties
    counter: React.CSSProperties
    button: React.CSSProperties
}

const styles: StylesType = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },

    counter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },

    button: {
        minWidth: '60px',
        height: '30px',
        backgroundColor: '#44a4e1',
    }
}