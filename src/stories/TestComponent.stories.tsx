import type {Meta} from '@storybook/react';
import {TestComponent} from '../components/TestComponent/TestComponent';
import {ChangeEvent, useRef, useState} from 'react';

const meta: Meta<typeof TestComponent> = {
    component: TestComponent,
};

export default meta;

export const UncontrolledInput = () => <input/>;
export const ControlledInputWithFixedValue = () => <input value={'Hard!'}/>

export const UncotrolledComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement> ) => setInputValue(e.currentTarget.value);

    return (
        <>
            <input value={inputValue} onChange={handleInputChange}/>
            Значение: {inputValue}
        </>
    )
}

export const GetValueByButtonPress = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = () => {
        if (inputRef.current !== null) {
            setInputValue(inputRef.current?.value);
            inputRef.current.value = '';
        }
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={handleInputChange}>Добавить значение!</button>
            <div>Значение: {inputValue} </div>
        </>
    )
}