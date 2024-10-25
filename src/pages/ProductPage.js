// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <h1>Страница товара {id}</h1>
            <p>Здесь можно отобразить информацию о товаре.</p>
            <button>Добавить в корзину</button> {/* Кнопка для примера */}
        </div>
    );
};

export default ProductPage;
