import _ from "lodash";
import ActionTypes from "../constants/actionTypes";
import initialState from "../stores/initialState";
import jwtDecode from "jwt-decode";

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      const { payload } = action;
      return { ...state, ...jwtDecode(payload.token) };

    case ActionTypes.REFRESH:
      return { ...state, ...jwtDecode(action.payload) };

    default:
      return state;
  }
};
