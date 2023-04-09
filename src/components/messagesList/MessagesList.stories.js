import { MessagesList } from './MessagesList';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Molecules/MessagesList',
  component: MessagesList,
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
    messages: [
      {
        message: 'Hello',
        senderId: 1,
        userName: 'John',
        timestamp: new Date().getTime(),
      },
      {
        message: 'Salam qaqa',
        senderId: 1,
        userName: 'John',
        timestamp: new Date().getTime(),
      },
      {
        message: 'Nerbaladi xalodelnik ustasi',
        senderId: 1,
        userName: 'John',
        timestamp: new Date().getTime(),
      }
    ]
  },
};