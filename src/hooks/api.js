import {useEffect, useState} from "react";
import * as firebase_api from '../firebase_api';

export default function useApi() {
    const [products, setProducts] = useState([]);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        firebase_api.getProducts().then(setProducts);
        firebase_api.getDishes().then(setDishes);
    }, []);

    function getProducts() {
        return firebase_api.getProducts()
            .then(setProducts);
    }

    function getDishes() {
        return firebase_api.getDishes()
            .then(setDishes);
    }

    return {
        data: {
            products,
            dishes,
        },
        actions: {
            getProducts,
            getDishes,
        }
    };
}
