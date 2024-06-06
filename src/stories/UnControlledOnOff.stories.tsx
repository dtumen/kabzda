import type { Meta } from '@storybook/react';

import UnControlled from '../components/UnControlledOnOff/UnControlledOnOff';

const meta: Meta<typeof UnControlled> = {
  component: UnControlled,
};

export default meta;

export const OneStateAccordion = () => {

  return (
      <UnControlled/>
  )
}