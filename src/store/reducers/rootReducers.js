import {combineReducers} from 'redux'
import metaReducer from "./metaReducer";
import postReducer from './postsReducer';

const rootReducer = combineReducers({
    meta: metaReducer,
    posts: postReducer
});
export default rootReducer