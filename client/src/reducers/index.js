const ANSWER = 'ANSWER';
const ERROR = 'ERROR';
const CLEAR = 'CLEAR';

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

const reducerstate = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ANSWER:
      return {
        ...state,
        question: payload.msg,
        serverBoard: payload.board,
        number: '',
      };
    case ERROR:
      return {
        ...state,
        question: payload,
      };
    case CLEAR:
      return {
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
          [null, 0, 0, 0, 0, 0, 0, 0, 0],
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

    default:
      return state;
  }
};
export default reducerstate;
