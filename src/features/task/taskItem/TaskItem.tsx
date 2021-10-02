import React from 'react';
import { Box, Checkbox, IconButton, Modal } from '@material-ui/core';
import { Delete, Edit, EventNote } from '@material-ui/icons';

import TaskForm from '../taskForm/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalOpen, handleModalOpen, selectTask } from '../taskSlice';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true))};
  const handleClose = () => dispatch(handleModalOpen(false));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '5px',
        bgcolor: '#ffffff',
        padding: '10px 20px',
        marginBottom: '10px',
      }}
    >
      <Box className="title" sx={{ display: 'flex', alignItems: 'center' }}>
        <EventNote sx={{ color: '#282828' }} />
        <p style={{ marginLeft: '10px' }}>{task.title}</p>
      </Box>
      <Box
        className="right_item"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Checkbox
          checked={task.completed}
          onClick={() => console.log(`check ${task.id}`)}
        />
        <IconButton onClick={handleOpen}>
          <Edit sx={{ color: '#282828' }} />
        </IconButton>
        <IconButton onClick={() => console.log(`delete ${task.id}`)}>
          <Delete sx={{ color: '#282828' }} />
        </IconButton>
      </Box>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
            textAlign: 'center'
          }}
        >
          <p>Edit Task</p>
          <TaskForm edit />
        </Box>
      </Modal>
    </Box>
  );
};

export default TaskItem;
