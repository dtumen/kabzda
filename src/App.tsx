import React, {useEffect, useState} from 'react';
import './App.css';
import {Accordion, ItemType} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import {Select} from './components/Select/Select';

export enum RatingValueType {
    Zero = 0,
    One,
    Two,
    Three,
    Four,
    Five
}

const accordionItems: ItemType[] = [
    {title: 'JavaScript', value: 'JS'},
    {title: 'TypeScript', value: 'TS'},
    {title: 'React', value: 'React'},
];

const selectItems: ItemType[] = [
    {title: 'none', value: 0},
    {title: 'Kiev', value: 1},
    {title: 'Minsk', value: 2},
    {title: 'Moscow', value: 3},
]

const defaultSelectValue = 'Select your city';

function App() {
    console.log('App rendered');

    const [rating, setRating] = useState<RatingValueType>(RatingValueType.Zero);
    const [isToggle, setToggle] = useState<boolean>(false);
    const [isAccordionCollapsed, setIsAccordionCollapsed] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState(defaultSelectValue);
    const [isSelectCollapsed, setSelectCollapsed] = useState(true);
    const [isFirstRender, serIsFirstRender] = useState(true);

    useEffect(() => {
        if (isFirstRender) {
            serIsFirstRender(false);
            return;
        }

        let timeoutId = setTimeout(() => {
            setSelectCollapsed(!isSelectCollapsed)
        }, 0);
        return () => clearTimeout(timeoutId)
    }, [selectValue]);

    const handleRatingChange = (value: RatingValueType) => setRating(value);
    const handleToggleChange = () => setToggle(!isToggle);
    const handleCollapsedChange = () => setIsAccordionCollapsed(prev => !prev);

    const handleClick = (value: any) => alert(value);

    // Select Handlers:
    const handleCollapsedSelectChange = () => {
        setSelectCollapsed(!isSelectCollapsed)
    }

    const handleClickOption = (value: string) => {
        setSelectValue(value);
    }

    return (
        <div className="App">
            <Rating rating={rating} handleRatingChange={handleRatingChange}/>
            <OnOff isToggle={isToggle} handleToggleChange={handleToggleChange}/>
            <Accordion
                titleValue={'Users'}
                collapsed={isAccordionCollapsed}
                items={accordionItems}
                handleCollapsedChange={handleCollapsedChange}
                onClick={handleClick}
            />
            <Select
                selectItems={selectItems}
                selectValue={selectValue}
                isSelectCollapsed={isSelectCollapsed}
                handleCollapsedSelectChange={handleCollapsedSelectChange}
                handleClickOption={handleClickOption}
            />
        </div>
    );
}


export default App;

