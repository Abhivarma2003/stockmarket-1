import React from 'react';
import TradeForm from './components/TradeForm';
import Dashboard from './components/Dashboard';
import StockList from './components/StockList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Stock Market Application</h1>
      <TradeForm />
      <StockList />
      <Dashboard />
    </div>
  );
}

export default App;
