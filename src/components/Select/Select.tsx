import React from 'react';
import {ItemType} from '../Accordion/Accordion';
import s from './Select.module.css';

type SelectPropsType = {
    selectItems: ItemType[]
    selectValue: string
    isSelectCollapsed: boolean
    handleCollapsedSelectChange: (value: any) => void
    handleClickOption: (value: any) => void
}
export const Select = (props: SelectPropsType) => {
    const {
        selectItems,
        isSelectCollapsed,
        handleCollapsedSelectChange,
        handleClickOption,
        selectValue
    } = props;

    return (
        <>
            <div className={s.customSelect} onClick={handleCollapsedSelectChange}>{selectValue}</div>
            {!isSelectCollapsed && selectItems.map((item: ItemType, i: number) => (
                <div className={s.selectItem} onClick={() => handleClickOption(item.title)}
                     key={i}>{item.title}</div>))}
        </>
    );
};
