import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Это бизнес-логика, вынес из UI - в редакс, те це UX
//Чтобы была возможно повторного использования или исключения
export const fetchRepositories = createAsyncThunk(
  'repositories/fetchRepositoriesStatus',
  async (params) => {
    const { login } = params;
    const { data } = await axios.get(`https://api.github.com/users/${login}/repos`);
    console.log(data);
    // console.log(data.items);
    // return data;
    return data;
  },
);

// первоначальное состояние
//Сохранение пицц в реакте
const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    setPerson(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRepositories.pending, (state, action) => {
      //console.log(state + 'идёт отправка');
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      // console.log(state + 'выполнилось');
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchRepositories.rejected, (state, action) => {
      //console.log('была ошибка');
      state.status = 'error';
      state.items = [];
    });
  },
});
export const { setPerson } = repositoriesSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default repositoriesSlice.reducer;
