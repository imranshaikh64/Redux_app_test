import {  createStore , applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "../Reducer/rootReducer";
import thunk from 'redux-thunk'

const initialState = {

}

const middleware = [thunk];

const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(...middleware)));

// console.log("store data",store);

export default store;