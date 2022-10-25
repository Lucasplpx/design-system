import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@lucasplpx-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea placeat incidunt totam dolorum beatae assumenda atque aspernatur id dolorem molestias impedit quam tempore voluptatibus quas excepturi error, voluptas nostrum eos.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
