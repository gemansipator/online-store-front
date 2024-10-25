// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
