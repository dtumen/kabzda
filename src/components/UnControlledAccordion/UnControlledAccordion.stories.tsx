import type { Meta } from '@storybook/react';

import UnControlledAccordion from './UnControlledAccordion';

const meta: Meta<typeof UnControlledAccordion> = {
    component: UnControlledAccordion,
};

export default meta;

export const OneStateAccordion = () => {

    return (
        <UnControlledAccordion
            titleValue={'Uncontrolled collapse'}
        />
    )
}