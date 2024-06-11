import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Rating} from '../components/Rating/Rating';
import React, {memo, useState} from 'react';


const meta: Meta<typeof Rating> = {
    component: Rating,
};

export default meta;

export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UserSecret component render')
    return (
        <div>
            {props.users && props.users.map((u: string, i) => <p key={i}>{u}</p>) }
        </div>
    )
}

const Users = React.memo(UsersSecret);

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['John, Adam, Michel']);

    const addUser = () => {
        setUsers([...users, 'Sveta'])
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={addUser}>addUser</button>
            <Users users={users}/>
        </div>
    )
}