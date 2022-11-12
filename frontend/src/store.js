import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/ProductReducer'
const reducer = combineReducers({
    products: productReducer // not working 😢
});
let intialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
// export
export default store;
