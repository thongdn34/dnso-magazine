import { getPosts } from "../../helpers";
import { sortDateArray } from "../../utils/commonFunctions";
import { GET_POSTS, GET_POSTS_FAIL, GET_POSTS_SUCCESS, GET_POST_FAIL, GET_POST_SUCCESS, SET_META } from "../constants";

export const getAllPosts = (params = {}) => {
  return async (dispatch) => {
    dispatch({ type: GET_POSTS });

    try {
      const res = await getPosts(params);
      dispatch({ type: GET_POSTS_SUCCESS, payload: sortDateArray(res) });
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
      dispatch({ type: SET_META, payload: { title: res[0]?.title, description: res[0]?.subDescrtiption } })
    } catch (error) {
      console.log('====err', error)
      dispatch({ type: GET_POST_FAIL })
    }
  }
};
