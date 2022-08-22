const initialState = {email: ''};
export const loginReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'setEmail':
      return {...state, email: action.email};
    default:
      return state;
  }
};
