import {
  GET_POSTS_SUCCESS,
} from "../constants";

const init = {
  posts: []
};

const postReducer = (state = init, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state;
  }
};

export default postReducer;
