import { getPosts } from "../../helpers";
import { GET_POSTS, GET_POSTS_SUCCESS } from "../constants";

export const getAllPosts = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POSTS });

    try {
      const res = await getPosts({
        _publicationState: 'live'
      });
      dispatch({ type: GET_POSTS_SUCCESS, payload: res });
    } catch (error) {
      console.log("===eror", error);
    }
  };
};
