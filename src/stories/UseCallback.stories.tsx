import type {Meta} from '@storybook/react';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {Callback, MemoCallback} from '../components/Callback/Callback';

const meta: Meta<typeof Callback> = {
    component: Callback,
};

export default meta;

type User = {
    id: number
    name: string
    age: number
    isVegan: boolean
}

const usersInit = [
    { id: 1, name: 'John', age: 20, isVegan: true },
    { id: 2, name: 'Ben', age: 21, isVegan: true },
    { id: 3, name: 'Maria', age: 22, isVegan: false },
]

export const FirstComponent = () => {
    console.log('FirstComponent render');
    const [users, setUsers] = useState<User[]>(usersInit);

    const handleUsersFilterOnVegan = () => {
        let veganUsers = usersInit.filter((u) => u.isVegan);
        setUsers(veganUsers)
    };

    const handleUsersFilterNotVegan = () => {
        let noVeganUsers = usersInit.filter((u) => !u.isVegan)
        setUsers(noVeganUsers)
    }

    const handleUsersFilterAll = () => {
        setUsers(usersInit)
    };


    const memoized = useMemo(() => {}, [])

    return (
        <>
            <button onClick={handleUsersFilterOnVegan}>vegan</button>
            <button onClick={handleUsersFilterNotVegan}>NotVegan</button>

            <div>
                {users && users.map((u: User) => <li key={u.id}>{u.name}</li>)}
            </div>
            <MemoCallback handleUsersFilterAll={handleUsersFilterAll}/>
        </>
    )
}

export const SomeComponent = () => {
    console.log('SomeComponent');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['JS', 'HTML', 'TS', 'CSS']);

    const memoizedAddBook = useCallback(() => {
            const newBooks = [...books, 'newBook'];
            setBooks(newBooks);
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newBooks = [...books, 'newBook'];
        setBooks(newBooks);
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <BooksSecret addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretProps = {
    addBook: () => void;
}

const BooksSecret = (props: BooksSecretProps) => {
    console.log('BooksSecret');
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

