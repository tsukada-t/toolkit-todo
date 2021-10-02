import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from '../taskItem/TaskItem';
import { selectTasks } from '../taskSlice';

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTasks);
  return (
    <Box sx={{ height: '50vh', overflow: 'hidden', overflowY: 'auto' }}>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </Box>
  );
};

export default TaskList;
