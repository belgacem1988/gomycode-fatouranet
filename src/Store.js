import { createStore } from "redux";
import billReducer from "./Reducers/Reducer"

const store = createStore(billReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store