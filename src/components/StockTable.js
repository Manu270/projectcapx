import React from 'react';

const StockTable = ({ stocks, onEdit, onDelete }) => {
    return (
        <div className="container my-5">
            <h2 className="text-center">Stock Holdings</h2>
            <div className="table-responsive">
                <table className="table table-hover table-bordered shadow-sm">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Ticker</th>
                            <th>Quantity</th>
                            <th>Buy Price</th>
                            <th>Total Value</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock) => (
                            <tr key={stock.id}>
                                <td>{stock.name}</td>
                                <td>{stock.ticker}</td>
                                <td>{stock.quantity}</td>
                                <td>${stock.buyPrice.toFixed(2)}</td>
                                <td>${(stock.quantity * stock.buyPrice).toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(stock)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(stock.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockTable;
