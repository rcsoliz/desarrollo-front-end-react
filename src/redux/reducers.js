import { combineReducers } from "redux";

//aca importamos todos los redurcers
import defaultReducer from "./default/defaultReducer";
import ProductReducer from "./products/productReducer";


const rootReducer = combineReducers({
    default: defaultReducer,
    product: ProductReducer
});

export default rootReducer;