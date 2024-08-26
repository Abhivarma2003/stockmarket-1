import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buyStock, sellStock } from '../actions/stockActions';

const TradeForm = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const handleBuy = () => {
    if (symbol && quantity) {
      dispatch(buyStock(symbol, parseInt(quantity, 10)));
      setSymbol('');
      setQuantity('');
    }
  };

  const handleSell = () => {
    if (symbol && quantity) {
      dispatch(sellStock(symbol, parseInt(quantity, 10)));
      setSymbol('');
      setQuantity('');
    }
  };

  return (
    <div>
      <h2>Trade Stocks</h2>
      <input
        type="text"
        placeholder="Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
    </div>
  );
};

export default TradeForm;
