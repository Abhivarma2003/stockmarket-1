const initialState = {
    holdings: {},
  };
  
  const tradeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BUY_STOCK':
        return {
          ...state,
          holdings: {
            ...state.holdings,
            [action.payload.symbol]: (state.holdings[action.payload.symbol] || 0) + action.payload.quantity,
          },
        };
      case 'SELL_STOCK':
        return {
          ...state,
          holdings: {
            ...state.holdings,
            [action.payload.symbol]: (state.holdings[action.payload.symbol] || 0) - action.payload.quantity,
          },
        };
      default:
        return state;
    }
  };
  
  export default tradeReducer;
  