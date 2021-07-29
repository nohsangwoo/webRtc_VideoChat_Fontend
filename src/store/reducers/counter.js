const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = data => ({ type: INCREASE, data: data });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch, getState, history) => {
  const state = getState();
  console.log('increaseGetState', state);
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => dispatch => {
  console.log('decreaseAsync');
  setTimeout(() => dispatch(decrease()), 1000);
};
const initialState = { number: 0 };

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 };
    case DECREASE:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}
