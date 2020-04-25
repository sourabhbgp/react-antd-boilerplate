import ActionTypes from "../constants/actionTypes";
import initialState from "../stores/initialState";
import { addKey } from "../utils/structure";

export default (state = initialState.subscribed, action) => {
  switch (action.type) {
    case ActionTypes.SUBSCRIBED:
      const { payload } = action;
      return addKey(payload);
    default:
      return state;
  }
};
