import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const holdings = useSelector((state) => state.trades.holdings);

  return (
    <div>
      <h2>Your Holdings</h2>
      <ul>
        {Object.keys(holdings).map((symbol) => (
          <li key={symbol}>
            {symbol}: {holdings[symbol]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

