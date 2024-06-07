import type {Meta} from '@storybook/react';
import {Select} from '../components/Select/Select';
import {ItemType} from '../components/Accordion/Accordion';
import React, {useEffect, useState} from 'react';


const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;

const selectItems: ItemType[] = [
    {title: 'none', value: 0},
    {title: 'Kiev', value: 1},
    {title: 'Minsk', value: 2},
    {title: 'Moscow', value: 3},
]

export const SelectCollapsed = () => {
    return (
        <>
            <h2>none</h2>
        </>
    )
}

export const SelectIsOpen = () => {
    return (
        <>
            <h2>Moscow</h2>
            <div>Minsk</div>
            <div>Kiev</div>
            <div>none</div>
        </>
    )
}

export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState('none');
    const [isSelectCollapsed, setSelectCollapsed] = useState(true);

    const handleCollapsedSelectChange = () => {
        setSelectCollapsed(!isSelectCollapsed)
    }

    const handleClickOption = (value: string) => {
        setSelectValue(value);
    }

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setSelectCollapsed(!isSelectCollapsed)
        }, 0);

        return () => clearTimeout(timeoutId)
    }, [selectValue]);

    return (
        <Select
            selectItems={selectItems}
            selectValue={selectValue}
            isSelectCollapsed={isSelectCollapsed}
            handleCollapsedSelectChange={handleCollapsedSelectChange}
            handleClickOption={handleClickOption}
        />
    )
}
