// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Страница товара {id}</h1>
            {/* Здесь можно отобразить информацию о товаре */}
        </div>
    );
};

export default ProductPage;
