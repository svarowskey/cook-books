import {useEffect, useState} from "react";
import * as firebase_api from '../firebase_api';

export default function useApi() {
    const [products, setProducts] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [product, setProduct] = useState([]);
    const [dish, setDish] = useState([]);
    const [dishProducts, setDishProducts] = useState();

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

    function getProductDishById(productId) {
        return firebase_api.getProducstByIds(productId).then(setDishProducts);
    }

    function getDishes() {
        return firebase_api.getDishes()
            .then(setDishes);
    }

    function getDishById(dishId) {
        return firebase_api.getDishById(dishId)
            .then(setDish)
    }

    function createProduct(data) {
        return firebase_api.createProduct(data)
            .then(product => setProducts([...products, product]));
    }

    return {
        data: {
            products,
            product,
            dishes,
            dish,
            dishProducts
        },
        actions: {
            getProducts,
            getProductById,
            getDishes,
            getDishById,
            getProductDishById,
            createProduct,
        }
    };
}
