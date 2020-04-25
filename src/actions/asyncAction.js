import { makeRequest, makeAsyncRequest } from "../constants/request";
import * as syncActions from "./syncAction";
import AppConstants from "../constants/appConstants";

export const getSubscribed = () => dispatch =>
  makeRequest(
    "get",
    `${AppConstants.baseURL}/api/panel/user/subscribed`,
    {},
    { Authorization: localStorage.getItem("token") }
  ).then(resp => dispatch(syncActions.subscribed(resp.data)));

// Auth

export const postLogin = data => dispatch =>
  makeAsyncRequest(
    "post",
    `${AppConstants.baseURL}/api/panel/auth/login`,
    data
  ).then(resp => {
    localStorage.setItem("token", resp.data.token);
    dispatch(syncActions.postLogin(resp.data));
  });
