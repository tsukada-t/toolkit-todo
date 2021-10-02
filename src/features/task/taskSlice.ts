import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TaskState {
  // taskが何個あるのかを管理
  idCount: number;
  // storeに保存するtaskの一覧
  tasks: { id: number; title: string; completed: boolean }[];
  // taskのtitleを編集する際にどのtaskが選択されるか
  selectedTask: { id: number; title: string; completed: boolean };
  //Modalを開くか閉じるかのフラグ
  isModalOpen: boolean;
}

const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: 'Task A', completed: false }],
  selectedTask: { id: 0, title: '', completed: false },
  isModalOpen: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // taskの作成
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    // taskの編集
    editTask: (state, action) => {
      // state.tasksの中から指定した値を抜き出す
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
    // Modalを開くか閉じるかのフラグ管理
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export const { createTask, editTask, handleModalOpen, selectTask } =
  taskSlice.actions;

export const selectTasks = (state: RootState): TaskState['tasks'] =>
  state.task.tasks;
export const selectIsModalOpen = (state: RootState): TaskState['isModalOpen'] =>
  state.task.isModalOpen;
export const selectSelectedTask = (
  state: RootState
): TaskState['selectedTask'] => state.task.selectedTask;

export default taskSlice.reducer;
