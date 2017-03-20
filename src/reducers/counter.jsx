const initialState = {
  current: 10,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return Object.assign({}, state, {
        current: state.current + 1,
      });
    case 'DECREMENT_COUNT':
      return Object.assign({}, state, {
        current: state.current - 1,
      });
    default:
      return state;
  }
};

export default counter;
