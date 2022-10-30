import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Это бизнес-логика, вынес из UI - в редакс, те це UX
//Чтобы была возможно повторного использования или исключения
export const fetchPerson = createAsyncThunk('person/fetchPersonStatus', async (params) => {
  const { search } = params;
  const { data } = await axios.get(`https://api.github.com/search/users?q=` + search);
  // console.log(data);
  // console.log(data.items);
  // return data.items;
  return data.items.slice(0, 1);
});

// первоначальное состояние
//Сохранение пицц в реакте
const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setPerson(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPerson.pending, (state, action) => {
      //console.log(state + 'идёт отправка');
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      // console.log(state + 'выполнилось');
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPerson.rejected, (state, action) => {
      //console.log('была ошибка');
      state.status = 'error';
      state.items = [];
    });
  },
});
export const { setPerson } = personSlice.actions;
// необходимо для импортирования этой переменной в дром файле
// чтобы вытащить какие-либо ACTIONS, те reducers = actions;

export default personSlice.reducer;
