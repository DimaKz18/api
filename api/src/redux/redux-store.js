import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer';

let rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;