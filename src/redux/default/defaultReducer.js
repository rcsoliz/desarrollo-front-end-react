import {SET_NAME_MODULE} from "./defaultTypes";

const initalState ={
    name: '',
};

const defaultReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_NAME_MODULE : {
            return {
                ...state,
                name: action.payload,
            }
        }
        default : {
            return state;
        }
    }
};

export default defaultReducer;