import {SET_FORM_DATA, RESET_FORM_DATA} from "./formTypes";

const initialState = {
    formData: {
        username: "",
        email:"",
        password:"",
    },
    defaultPassword: "mod7ReactUSIP",
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                formData:{
                    ...state.formData,
                    ...state.defaultPassword,
                    ...action.payload,
                }
            }
        }
        case RESET_FORM_DATA : {
            return initialState;
        }

        default : {
            return state;
        }
    }
};

export default formReducer;