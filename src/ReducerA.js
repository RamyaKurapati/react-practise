const intialState = {
  a: 1
};

const reducerA = (state = intialState, action) => {
  switch (action.type) {
    case "UPDATE_A":
      return { ...state, a: state.a + action.b };
    default:
      return state;
  }
};

export default reducerA;
