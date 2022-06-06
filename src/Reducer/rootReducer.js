import {combineReducers} from 'redux'
import  Reducer  from './reducer';


const rootReducer = combineReducers({
     users: Reducer,
})

export default rootReducer;