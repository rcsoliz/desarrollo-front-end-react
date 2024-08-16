import { createStore } from "redux";

//aca impotamos nuestro reducer
import rootReducer from "./reducers";
const store = createStore(rootReducer);

export default store;