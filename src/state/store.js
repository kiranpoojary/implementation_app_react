import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./action/useraction";

export const store = createStore(reducer, {}, applyMiddleware(thunk));
