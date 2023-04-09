import { MessageBubble } from './MessageBubble';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Atoms/Messages/Bubble',
  component: MessageBubble,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = {
  args: {
    label: 'Bubble',
    message: 'Salam Brat',
    isOwnMessage: true,
    timestamp: '12:00',
  },
};

export const NotOwnMessage = {
  args: {
    label: 'Bubble',
    message: 'Salam Brat',
    isOwnMessage: false,
    timestamp: '12:00',
  },
};