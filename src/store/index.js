import { createStore, combineReducers, compse } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index.js'

const store = createStore (
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
)
export const history = syncHistoryWithStore (
  browserHistory,
  store
)

export default store
