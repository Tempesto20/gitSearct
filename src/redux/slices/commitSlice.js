import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Это бизнес-логика, вынес из UI - в редакс, те це UX
//Чтобы была возможно повторного использования или исключения
export const fetchCommit = createAsyncThunk('commit/fetchCommitStatus', async (params) => {
  const { name, login, searchValue } = params;
  const { data } = await axios.get(
    // `https://api.github.com/users/${login}/repos`
    // `https://api.github.com/repos/Tempesto20/${login}/commits`,
    // `https://api.github.com/repos/${login}/gitSearct/commits`,
    // `https://api.github.com/repos/${login}/${name}/commits`,
    // `https://api.github.com/repos/Tempesto20/gitSearct/commits`,
    // `https://api.github.com/repos/${login}/gitSearct/commits`,
    `https://api.github.com/repos/${searchValue}/${name}/commits`,
  );
  //   console.log(data);
  // return data;
  return data;
});

// первоначальное состояние
//Сохранение пицц в реакте
const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const commitSlice = createSlice({
  name: 'commit',
  initialState,
  reducers: {
    setPerson(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCommit.pending, (state, action) => {
      //console.log(state + 'идёт отправка');
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchCommit.fulfilled, (state, action) => {
      // console.log(state + 'выполнилось');
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchCommit.rejected, (state, action) => {
      //console.log('была ошибка');
      state.status = 'error';
      state.items = [];
    });
  },
});
export const { setPerson } = commitSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default commitSlice.reducer;
