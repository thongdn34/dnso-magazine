import { getPosts } from "../../helpers";
import {
  GET_POST_CATEGORY,
  GET_POST_CATEGORY_FAIL,
  GET_POST_CATEGORY_SUCCESS
} from "../constants";

export const getPostsCategories = (category) => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_CATEGORY });

    try {
      const res = await getPosts({ "category.translatedName": category });
      dispatch({ type: GET_POST_CATEGORY_SUCCESS, payload: res });
    } catch (error) {
      console.log("===eror", error);
      dispatch({ type: GET_POST_CATEGORY_FAIL });
    }
  };
};
