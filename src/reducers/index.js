import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

const root_reducers = combineReducers({
    products,
    cart
})

export default root_reducers;