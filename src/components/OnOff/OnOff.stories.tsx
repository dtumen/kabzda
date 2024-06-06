import type { Meta } from '@storybook/react';

import OnOff from './OnOff';
import {useState} from 'react';

const meta: Meta<typeof OnOff> = {
    component: OnOff,
};

export default meta;


export const SwitchedOff = () => {

    return (
        <OnOff
            isToggle={false}
            handleToggleChange={()=>{}}
        />
    )
}

export const SwitchedOn = () => {
    return (
        <OnOff
            isToggle={true}
            handleToggleChange={()=>{}}
        />
    )
}

export const SwitchedControlled = () => {
    const [isToggle, setToggle] = useState<boolean>(false);

    const handleToggleChange = () => setToggle(prev => !prev);

    return (
        <OnOff
            isToggle={isToggle}
            handleToggleChange={handleToggleChange}
        />
    )
}