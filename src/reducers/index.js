import { combineReducers } from 'redux';
import stockReducer from './stockReducer';
import tradeReducer from './tradeReducer';

const rootReducer = combineReducers({
  stocks: stockReducer,
  trades: tradeReducer,
});

export default rootReducer;
