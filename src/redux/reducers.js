import { combineReducers } from "redux";

//aca importamos todos los redurcers
import defaultReducer from "./default/defaultReducer";
import ProductReducer from "./products/productReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
    default: defaultReducer,
    product: ProductReducer,
    form: formReducer,
});

export default rootReducer;