import type {Meta, StoryObj} from '@storybook/react';
import React, {memo, useCallback, useMemo, useState} from 'react';


const meta: Meta = {
    title: 'React/useCallback',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

type PropsType = {
    handleUsersFilterAll: () => void;
}
const Callback = ({handleUsersFilterAll}: PropsType) => {
    console.log('Callback render!');
    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            Component Callback:
            <button onClick={handleUsersFilterAll}>All</button>
        </div>
    );
};

const MemoCallback = memo(Callback);

type User = {
    id: number
    name: string
    age: number
    isVegan: boolean
}

const usersInit = [
    {id: 1, name: 'John', age: 20, isVegan: true},
    {id: 2, name: 'Ben', age: 21, isVegan: true},
    {id: 3, name: 'Maria', age: 22, isVegan: false},
]

export const FirstComponent: Story = {
    parameters: {
        layout: 'centered',
    },

    render: () => {
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


        const memoized = useMemo(() => {
        }, [])

        return (
            <>
            <div style={stylesFirst.buttonContainer}>
                <button style={stylesFirst.button} onClick={handleUsersFilterOnVegan}>vegan</button>
                <button style={stylesFirst.button} onClick={handleUsersFilterNotVegan}>not vegan</button>
            </div>
                <div style={stylesFirst.list}>
                    {users && users.map((u: User) => <li key={u.id}>{u.name}</li>)}
                </div>
                <MemoCallback handleUsersFilterAll={handleUsersFilterAll}/>
            </>
        )
    }
}

type FirstStylesType = {
    buttonContainer: React.CSSProperties
    list: React.CSSProperties
    button: React.CSSProperties
}

const stylesFirst: FirstStylesType = {
    buttonContainer: {
        display: 'flex',
        gap: '20px',
        marginBottom: '20px',
    },

    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        marginBottom: '20px',
    },

    button: {
        minWidth: '50px',
        minHeight: '30px',
        backgroundColor: '#0888da',
        color: '#d2cbcb',

        padding: '10px',
        borderRadius: '10px',
    }
}

export const SomeComponent: StoryObj = {
    parameters: {
        layout: 'centered',
    },

    render: () => {
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

        return <div style={styles.container}>
            <div style={styles.counterContainer}>
                <button style={styles.button} onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
            </div>
            <BooksSecret addBook={memoizedAddBook2}/>
        </div>
    }
}

type BooksSecretProps = {
    addBook: () => void;
}

const BooksSecret = (props: BooksSecretProps) => {
    console.log('BooksSecret');
    return <div>
        <button style={styles.button} onClick={props.addBook}>add book</button>
    </div>
}

type StylesType = {
    container: React.CSSProperties
    counterContainer: React.CSSProperties
    button: React.CSSProperties
}

const styles: StylesType = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },

    counterContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
    },

    button: {
        minWidth: '50px',
        height: '30px',
        backgroundColor: '#0888da',
        color: '#d2cbcb',
    }
}

