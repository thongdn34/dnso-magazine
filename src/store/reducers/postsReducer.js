import {
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
} from "../constants";

const init = {
  posts: [],
  post: '',
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload[0]
      }
    case GET_POSTS_FAIL:
    case GET_POST_FAIL:
      return state;
    default:
      return state;
  }
};

export default postReducer;
