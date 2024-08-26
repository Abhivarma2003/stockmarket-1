import axios from 'axios';

export const setStocks = (stocks) => ({
  type: 'SET_STOCKS',
  payload: stocks,
});

export const fetchStocks = () => async (dispatch) => {
  try {
    // Mock API call
    const response = await axios.get('https://api.mock.com/stocks'); // Use a real API in production
    dispatch(setStocks(response.data));
  } catch (error) {
    console.error('Error fetching stocks:', error);
  }
};

export const buyStock = (symbol, quantity) => ({
  type: 'BUY_STOCK',
  payload: { symbol, quantity },
});

export const sellStock = (symbol, quantity) => ({
  type: 'SELL_STOCK',
  payload: { symbol, quantity },
});
