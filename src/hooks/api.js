import {useEffect, useState} from "react";
import * as firebase_api from '../firebase_api';

export default function useApi() {
    const [products, setProducts] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        firebase_api.getProducts().then(setProducts);
        firebase_api.getDishes().then(setDishes);
    }, []);

    function getProducts() {
        return firebase_api.getProducts()
            .then(setProducts);
    }

    function getProductById(productId) {
        return firebase_api.getProductById(productId)
            .then(setProduct);
    }

    function getDishes() {
        return firebase_api.getDishes()
            .then(setDishes);
    }

    return {
        data: {
            products,
            product,
            dishes,
        },
        actions: {
            getProducts,
            getProductById,
            getDishes,
        }
    };
}
