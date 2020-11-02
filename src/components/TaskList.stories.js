import React from 'react'
import { PureTaskList as TaskList } from './TaskList'
import * as TaskStories from './Task.stories'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
}

const Template = (args) => <TaskList {...args} />

export const Default = Template.bind({})

let defaultTasks = []
for (let i = 1; i < 7; i++) {
  defaultTasks.push({
    ...TaskStories.Default.args.task,
    id: String(i),
    title: `Task ${i}`,
  })
}
Default.args = {
  tasks: defaultTasks,
}

export const WithPinnedTasks = Template.bind({})

WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
}

export const Loading = Template.bind({})
Loading.args = {
  tasks: [],
  loading: true,
}

export const Empty = Template.bind({})
Empty.args = {
  ...Loading.args,
  loading: false,
}
