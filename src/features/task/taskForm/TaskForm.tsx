import { Box, Button, TextField } from '@material-ui/core';
import React from 'react';
import {
  createTask,
  editTask,
  handleModalOpen,
  selectSelectedTask,
} from '../taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectSelectedTask);
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const handleEdit = (data: Inputs) => {
    const sendData = { ...selectedTask, title: data.taskTitle };
    console.log(sendData);
    dispatch(editTask(sendData));
    dispatch(handleModalOpen(false));
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Box sx={{ width: '35vw', marginRight: '20px' }}>
          <form
            onSubmit={
              edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)
            }
          >
            <TextField
              id="outlined-basic"
              label={edit ? 'Edit Task' : 'New Task'}
              variant="outlined"
              placeholder={edit ? selectedTask.title : ''}
              {...register('taskTitle')}
              name="taskTitle"
              sx={{ width: '100%' }}
            />
            {edit ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '20px',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    marginBottom: '10px',
                  }}
                  color="success"
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={() => dispatch(handleModalOpen(false))}
                >
                  Cancel
                </Button>
              </Box>
            ) : (
              ''
            )}
          </form>
        </Box>
      </Box>
    </>
  );
};

export default TaskForm;
