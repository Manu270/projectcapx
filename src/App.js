import React, { useState ,useEffect} from 'react';
import { getAllStocks, addStock as addStockService, updateStock as updateStockService, deleteStock as deleteStockService } from './services/stockService';
// ... other imports remain the same ...
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StockForm from './components/StockForm';
import StockTable from './components/StockTable';
import './App.css';


const App = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    loadStocks();
  }, []);

  const loadStocks = async () => {
    try {
      const response = await getAllStocks();
      setStocks(response.data);
    } catch (error) {
      console.error('Error loading stocks:', error);
    }
  };

  const addStock = async (newStock) => {
    try {
      const response = await addStockService(newStock);
      setStocks([...stocks, response.data]);
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  const editStock = async (updatedStock) => {
    try {
      await updateStockService(updatedStock.id, updatedStock);
      setStocks(stocks.map((stock) => 
        stock.id === updatedStock.id ? updatedStock : stock
      ));
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  const deleteStock = async (id) => {
    try {
      await deleteStockService(id);
      setStocks(stocks.filter((stock) => stock.id !== id));
    } catch (error) {
      console.error('Error deleting stock:', error);
    }
  };


  return (
    <>
      <Navbar />
      <Routes>
  <Route
    path="/"
    element={
      <>
        <Dashboard stocks={stocks} />
        <StockTable stocks={stocks} onEdit={editStock} onDelete={deleteStock} />
      </>
    }
  />
  <Route path="/add-stock" element={<StockForm onSubmit={addStock} />} />
  <Route
    path="/edit-stock/:id"
    element={
      <StockForm
        onSubmit={(updatedStock) => editStock({ ...updatedStock })}
      />
    }
  />
</Routes>

    </>
  );
};

export default App;
