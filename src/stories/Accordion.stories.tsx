import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from '../components/Accordion/Accordion';
import {useState} from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

const accordionItems = [
    { title: 'JavaScript', value: 'JS' },
    { title: 'TypeScript', value: 'TS' },
    { title: 'React', value: 'React' },
];

const onChangeHandler = action('some text');
export const CollapsedAccordion = () => {
    return (
        <Accordion
            titleValue={'Collapsed'}
            collapsed={true}
            handleCollapsedChange={onChangeHandler}
            items={accordionItems}
            onClick={() => {}}
        />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion
            titleValue={'Open'}
            collapsed={false}
            handleCollapsedChange={() => {}}
            items={accordionItems}
            onClick={() => {}}
        />
    )
}

export const ControlledAccordion = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const collapsedHandler = () => {
        setIsCollapsed(!isCollapsed);
    }

    const handleClick = (value: any) => {
        alert(value)
    }

    return (
        <Accordion
            titleValue={'Skills'}
            collapsed={isCollapsed}
            handleCollapsedChange={collapsedHandler}
            items={accordionItems}
            onClick={handleClick}
        />
    )
}