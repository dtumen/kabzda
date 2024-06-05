import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import {useState} from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>
export const FirstControlledStory: Story = {
    args: {
        titleValue: 'FirstControlledStory',
        collapsed: false,
        onChange: action('First Accordion Toggled!'),
    }
}

const onChangeHandler = action('some text');
export const CollapsedAccordion = () => {
    return (
        <Accordion
            titleValue={'Collapsed'}
            collapsed={true}
            onChange={onChangeHandler}
        />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion
            titleValue={'Open'}
            collapsed={false}
            onChange={() => {}}
        />
    )
}

export const DemoAccordion = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const collapsedHandler = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <Accordion
            titleValue={'DemoCollaped'}
            collapsed={isCollapsed}
            onChange={collapsedHandler}
        />
    )
}