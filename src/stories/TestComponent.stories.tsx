import type {Meta} from '@storybook/react';
import {TestComponent} from '../components/TestComponent/TestComponent';
import {ChangeEvent, useRef, useState} from 'react';

const meta: Meta<typeof TestComponent> = {
    component: TestComponent,
};

export default meta;

export const UncontrolledInput = () => <input/>;
export const ControlledInputWithFixedValue = () => <input value={'Hard!'}/>
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

export const ControlledInput = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    return (
        <>
            <input value={inputValue} onChange={handleInputChange}/>
            -{inputValue}
        </>
    )
}

export const ControlledCheckbox = () => {
    const [isChecked, setChecked] = useState(false);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!isChecked);
    }

    const checkedValue = String(isChecked);

    return (
        <>
            <input type={'checkbox'} checked={isChecked} onChange={handleInputChange}/>
            <p>Value of checkbox: {checkedValue}</p>
        </>
    )
}

export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState<string | undefined>('Moscow');
    const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value);
    }

    return (
        <>
            <select value={selectValue} onChange={handleInputChange}>
                <option>none</option>
                <option value={'Moscow'}>Moscow</option>
                <option value={'Kiev'}>Kiev</option>
                <option value={'Minsk'}>Minsk</option>
            </select>
            Select value: {selectValue}
        </>
    )
}