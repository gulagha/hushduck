import { MessageInput } from './MessageInput';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Atoms/Messages/MessageInput',
  component: MessageInput,
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
    label: 'MessageInput',
    placeholder: 'Placeholder',
  },
};

export const WithoutPlaceholder = {
  args: {
    label: 'MessageInput'
  },
};

export const Disabled = {
  args: {
    disabled: true,
    placeholder: 'Placeholder',
    label: 'MessageInput',
  },
};