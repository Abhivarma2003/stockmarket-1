import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../actions/stockActions';

const StockList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.stocks);

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <div>
      <h2>Available Stocks</h2>
      <ul>
        {stocks.length ? (
          stocks.map((stock) => (
            <li key={stock.symbol}>
              {stock.symbol}: ${stock.price}
            </li>
          ))
        ) : (
          <li>Loading stocks...</li>
        )}
      </ul>
    </div>
  );
};

export default StockList;
