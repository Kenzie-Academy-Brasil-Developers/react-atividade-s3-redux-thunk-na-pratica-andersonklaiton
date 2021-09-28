import { ADD_COMMENT } from "./actionTypes";

const initialState = { name: "kenzie", comments: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return action.updateUser;
    default:
      return state;
  }
};

export default userReducer;
