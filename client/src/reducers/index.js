import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  number: '',
  question: 'what number in row :0 , colum: 0 ?',
  clientBoard: [
    [2, 9, 6, 3, 1, 8, 5, 7, 4],
    [5, 8, 4, 9, 7, 2, 6, 1, 3],
    [7, 1, 3, 6, 4, 5, 2, 8, 9],
    [6, 2, 5, 8, 9, 7, 3, 4, 1],
    [9, 3, 1, 4, 2, 6, 8, 5, 7],
    [4, 7, 8, 5, 3, 1, 9, 2, 6],
    [1, 6, 7, 2, 5, 3, 4, 9, 8],
    [8, 5, 9, 7, 6, 4, 1, 3, 2],
    [3, 4, 2, 1, 8, 9, 7, 6, 5],
  ],
  serverBoard: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};

const reducerSlice = createSlice({
  name: 'rootReducer',
  initialState,
  reducers: {
    answer(state, action) {
      state.question = action.payload.msg;
      state.serverBoard = action.payload.board;
      state.number = '';
    },
    error(state, action) {
      state.question = action.payload;
    },
    clear(state) {
      state.number = '';
      state.question = 'what number in row :0 , colum: 0 ?';
      state.clientBoard = [
        [2, 9, 6, 3, 1, 8, 5, 7, 4],
        [5, 8, 4, 9, 7, 2, 6, 1, 3],
        [7, 1, 3, 6, 4, 5, 2, 8, 9],
        [6, 2, 5, 8, 9, 7, 3, 4, 1],
        [9, 3, 1, 4, 2, 6, 8, 5, 7],
        [4, 7, 8, 5, 3, 1, 9, 2, 6],
        [1, 6, 7, 2, 5, 3, 4, 9, 8],
        [8, 5, 9, 7, 6, 4, 1, 3, 2],
        [3, 4, 2, 1, 8, 9, 7, 6, 5],
      ];
      state.serverBoard = [
        [null, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
    },
  },
});

export const answerAsync = (number) => async (dipatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ number: number });
    let res = await axios.post('/verify', body, config);
    console.log(res.data);
    let { msg, board } = res.data;

    dipatch(reducerSlice.actions.answer({ msg, board }));
  } catch (e) {
    dipatch(reducerSlice.actions.error(e.response.statusText));
  }
};

export const reducerActions = reducerSlice.actions;

export default reducerSlice.reducer;
