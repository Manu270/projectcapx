import React from 'react';

const Dashboard = ({ stocks }) => {
    const totalValue = stocks.reduce((sum, stock) => sum + stock.quantity * stock.buyPrice, 0);

    return (
        <div className="container my-5">
            <h1 className="text-center">Dashboard</h1>
            <div className="card shadow-sm my-4">
                <div className="card-body text-center">
                    <h5 className="card-title">Total Portfolio Value</h5>
                    <h2 className="card-text text-success">${totalValue.toFixed(2)}</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
