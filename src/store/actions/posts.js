import { getPosts } from "../../helpers";
import { GET_POSTS, GET_POSTS_FAIL, GET_POSTS_SUCCESS, GET_POST_FAIL, GET_POST_SUCCESS } from "../constants";

export const getAllPosts = (params = {}) => {
  return async (dispatch) => {
    dispatch({ type: GET_POSTS });

    try {
      const res = await getPosts(params);
      dispatch({ type: GET_POSTS_SUCCESS, payload: res });
    } catch (error) {
      console.log("===eror", error);
      dispatch({ type: GET_POSTS_FAIL })
    }
  };
};

export const getAPost = (params) => {
  return async (dispatch) => {
    try {
      const res = await getPosts(params)
      dispatch({ type: GET_POST_SUCCESS, payload: res })
    } catch (error) {
      console.log('====err', error)
      dispatch({ type: GET_POST_FAIL })
    }
  }
};
