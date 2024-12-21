import React, { useState } from 'react';

const StockForm = ({ onSubmit, initialData = {} }) => {
    const [stock, setStock] = useState({
        name: initialData.name || '',
        ticker: initialData.ticker || '',
        quantity: initialData.quantity || '',
        buyPrice: initialData.buyPrice || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStock((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(stock);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center">{initialData.id ? 'Edit Stock' : 'Add Stock'}</h1>
            <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded">
                <div className="mb-3">
                    <label className="form-label">Stock Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={stock.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ticker</label>
                    <input
                        type="text"
                        className="form-control"
                        name="ticker"
                        value={stock.ticker}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        name="quantity"
                        value={stock.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Buy Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="buyPrice"
                        value={stock.buyPrice}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
            </form>
        </div>
    );
};

export default StockForm;
