import type { Meta, StoryObj } from '@storybook/react';

import { TileButton } from "@local/components/atoms/TileButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TileButton> = {
  title: 'Atoms/TileButton',
  component: TileButton,
  tags: ['autodocs'],
  argTypes: {
    text: {
        control: 'object'
    },
    dimensions: {
        control: 'object'
    },
    backgroundColor: {
        control: 'color'
    },
    backgroundTouchColor:  {
        control: 'color'
    },
    opacity:  {
        control: { type: 'range', min: 0, max:1, step: 0.1}
    },
    hoverClass:  {
        control: 'text'
    },
    hoverColor:  {
        control: 'color'
    },
  },
};

export default meta;
type Story = StoryObj<typeof TileButton>;

export const Desktop: Story = {
  args: {
    text: 'Test',
    dimensions: [128, 128],
    backgroundTouchColor: '#94b979'
  },
};

export const TouchDevice: Story = {
  args: {
    text: 'Test',
    dimensions: [128, 128],
    isTouchDevice: true,
    backgroundTouchColor: '#94b979'
  },
};
