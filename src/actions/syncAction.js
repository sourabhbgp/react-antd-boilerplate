import ActionTypes from "../constants/actionTypes";

export const postLogin = data => ({
  type: ActionTypes.LOGIN,
  payload: data
});

export const subscribed = data => ({
  type: ActionTypes.SUBSCRIBED,
  payload: data
});

export const authRefresh = data => ({
  type: ActionTypes.REFRESH,
  payload: data
});

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: ActionTypes.LOGOUT
  };
};
