// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

const Header = () => {
    return (
        <header>
            <h2>Мой Магазин</h2>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/cart">Корзина</Link>
            </nav>
        </header>
    );
};

export default Header;
