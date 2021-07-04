import axios from 'axios';

const ANSWER = 'ANSWER';
const ERROR = 'ERROR';
const CLEAR = 'CLEAR';

export const answer = (number) => async (dipatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ number: number });
    let res = await axios.post('/verify', body, config);
    let { msg, board } = res.data;
    dipatch({
      type: ANSWER,
      payload: { msg, board },
    });
  } catch (e) {
    dipatch({
      type: ERROR,
      payload: e.response.statusText,
    });
  }
};
export const clear = () => async (dipatch) => {
  dipatch({
    type: CLEAR,
  });
};
