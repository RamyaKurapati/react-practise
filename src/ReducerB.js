const intialState = {
  b: 1
};

const reducerB = (state = intialState, action) => {
  switch (action.type) {
    case "UPDATE_B":
      return { ...state, b: state.b + action.a };
    default:
      return state;
  }
};

export default reducerB;
