import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text } from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);

stories.add('Button', () => <Button text={text('text', 'Some text')} />, {
    info: { inline: true },
    text: `

  ### Notes

  Simple example component

  ### Usage
  ~~~js
  <Button
    text="Some text"
  />
  ~~~

`
});