import {IS_LOADING, RE_RENDERED, SET_META, THROW_ERROR, THROW_SUCCESS} from "../constants";
import {toast} from "react-toastify";

const init = {
    title: 'Doanh Nghiệp Đầu Tư',
    description: 'Description'
};

const metaReducer = (state = init, action) => {
    switch (action.type) {
        case SET_META:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export default metaReducer;