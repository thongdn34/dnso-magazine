import {
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS,
  GET_POST_CATEGORY_FAIL,
  GET_POST_CATEGORY_SUCCESS,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
} from "../constants";

const init = {
  posts: [],
  post: '',
  count: 0,
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
    case GET_POST_CATEGORY_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts || action.payload,
        count: action.payload?.count || 0
      }
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload[0]
      }
    case GET_POSTS_FAIL:
    case GET_POST_FAIL:
    case GET_POST_CATEGORY_FAIL:
      return state;
    default:
      return state;
  }
};

export default postReducer;
