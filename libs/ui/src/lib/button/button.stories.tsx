import React from 'react';
import { Button } from './button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

export const Basic = () => {
  const [clicks, setClicks] = React.useState(0);
  const incrementClicks = () => {
    setClicks(clicks + 1);
    console.log(`Click: ${clicks}`);
  };
  return (
    <Button
      label={text('label', 'Press Me')}
      onClick={incrementClicks}
      disabled={boolean('disabled', false)}
    />
  );
};
