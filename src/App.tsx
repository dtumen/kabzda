import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import UnConOnOff from './components/OnOff/OnOff';

export enum RatingValueType {
    Zero = 0,
    One,
    Two,
    Three,
    Four,
    Five
}

function App() {
    console.log('App rendered');

    const [rating, setRating] = useState<RatingValueType>(RatingValueType.Zero);
    const [isToggle, setToggle] = useState<boolean>(false);
    const [isAccordionCollapsed, setIsAccordionCollapsed] = useState<boolean>(false);

    const handleRatingChange = (value: RatingValueType) => setRating(value);
    const handleToggleChange = () => setToggle(!isToggle);
    const handleCollapsedChange = () => setIsAccordionCollapsed(prev => !prev);

    return (
        <div className="App">
            <Rating rating={rating} handleRatingChange={handleRatingChange}/>
            <UnConOnOff isToggle={isToggle} handleToggleChange={handleToggleChange}/>
            <Accordion titleValue={'Users'} collapsed={isAccordionCollapsed}
                       onChange={handleCollapsedChange}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle: React.FC<PageTitlePropsType> = ({ title }) => {
    console.log('AppTitle rendered');
    return <h2>{title}</h2>;
}


export default App;

