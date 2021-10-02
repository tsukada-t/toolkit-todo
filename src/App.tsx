import { styled } from '@material-ui/core';
import React from 'react';
import { Header } from './components/Header';
import TaskForm from './features/task/taskForm/TaskForm';
import TaskList from './features/task/taskList/TaskList';

const App: React.FC = () => {
  return (
    <Box>
      <Wrapper>
        <Header />
        <TaskForm />
        <TaskList />
      </Wrapper>
    </Box>
  );
};

export default App;

const Box = styled('div')({
  backgroundColor: '#ffd5c9',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Wrapper = styled('div')({
  height: '70vh',
  width: '70vw',
  borderRadius: '10px',
  backgroundColor: '#f1f2f7',
  padding: '10px 40px',
});
