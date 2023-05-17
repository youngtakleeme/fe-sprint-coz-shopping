import { createStore } from "redux";
import itemReducer from "../reducers/itemReducer";
// import rootReducer from "../reducers/index.js";

const store = createStore(itemReducer);

export default store;
