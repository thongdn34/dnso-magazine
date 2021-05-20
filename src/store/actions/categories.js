import { getPosts } from "../../helpers";
import {
  GET_POST_CATEGORY,
  GET_POST_CATEGORY_FAIL,
  GET_POST_CATEGORY_SUCCESS
} from "../constants";

export const getPostsCategories = (
  category,
  params = { _start: 0, _limit: 10 }
) => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_CATEGORY });

    try {
      const res = await getPosts({ "category.type": category, ...params });
      dispatch({ type: GET_POST_CATEGORY_SUCCESS, payload: res });
    } catch (error) {
      console.log("===eror", error);
      dispatch({ type: GET_POST_CATEGORY_FAIL });
    }
  };
};

export const getPostsSubCategories = (
  subCategory,
  params = { _start: 10, _limit: 10 }
) => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_CATEGORY });

    try {
      const res = await getPosts({
        "sub_categories.type": subCategory,
        ...params
      });
      dispatch({ type: GET_POST_CATEGORY_SUCCESS, payload: res });
    } catch (error) {
      console.log("===eror", error);
      dispatch({ type: GET_POST_CATEGORY_FAIL });
    }
  };
};

export const getPostsNestedCategories = (
  nestedCategory,
  params = { _start: 10, _limit: 10 }
) => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_CATEGORY });

    try {
      const res = await getPosts({
        "nested_categories.Sub_subcategorys": nestedCategory,
        ...params
      });
      dispatch({ type: GET_POST_CATEGORY_SUCCESS, payload: res });
    } catch (error) {
      console.log("===eror", error);
      dispatch({ type: GET_POST_CATEGORY_FAIL });
    }
  };
};

export const getCountPosts = () => {
  
}