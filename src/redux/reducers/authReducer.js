import { TYPES } from "../actions/authAction";

const initialState = {}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
}

export default authReducer;