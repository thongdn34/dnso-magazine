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
      const res = await getPosts({ "category.type": category });
      dispatch({ type: GET_POST_CATEGORY_SUCCESS, payload: res });
    } catch (error) {
      console.log("===eror", error);
      dispatch({ type: GET_POST_CATEGORY_FAIL });
    }
  };
};

export const getPostsSubCategories = (subCategory) => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_CATEGORY });

    try {
      const res = await getPosts({ "sub_categories.type": subCategory });
      dispatch({ type: GET_POST_CATEGORY_SUCCESS, payload: res });
    } catch (error) {
      console.log("===eror", error);
      dispatch({ type: GET_POST_CATEGORY_FAIL });
    }
  };
};

export const getPostsNestedCategories = (nestedCategory) => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_CATEGORY });

    try {
      const res = await getPosts({ "nested_categories.Sub_subcategorys": nestedCategory });
      dispatch({ type: GET_POST_CATEGORY_SUCCESS, payload: res });
    } catch (error) {
      console.log("===eror", error);
      dispatch({ type: GET_POST_CATEGORY_FAIL });
    }
  };
};
