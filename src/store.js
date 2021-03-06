import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import * as api from './services/api';

const store = createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument({ api }))
  );
  
export default store;
  