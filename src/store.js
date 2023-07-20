import { createStore } from "redux";
import { calcReducer } from "./reducers/calcReducer";

const store = createStore(calcReducer);

export default store;
