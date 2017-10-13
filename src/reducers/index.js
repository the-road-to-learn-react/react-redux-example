import { combineReducers } from 'redux';

import articleReducer from './articleReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  articlesState: articleReducer,
  searchState: searchReducer,
});

export default rootReducer;