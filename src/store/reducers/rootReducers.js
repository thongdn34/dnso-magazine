import {combineReducers} from 'redux'
import metaReducer from "./metaReducer";
import postReducer from './posts';

const rootReducer = combineReducers({
    meta: metaReducer,
    posts: postReducer
});
export default rootReducer