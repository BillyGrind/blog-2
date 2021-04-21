import {createStore, applyMiddleware, combineReducers} from 'redux';
import ArticleReducer from './Articles/ArticleReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ArticleReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store ;