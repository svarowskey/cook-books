import style from './Dish.module.scss';
import useApi from "../../hooks/api";
import {useEffect, useState} from "react";
import Product from "../Product/Product";
import {List} from "@material-ui/core";

const Dish = ({match}) => {
    const {data: {dish, product, dishProducts}, actions} = useApi();
    const [products, setProducts] = useState();

    useEffect(() => {
        actions.getDishById(match.params.dishId);
    }, []);

    function getPr(prod) {
        actions.getProductDishById(prod.id);
    }

    function getProducts() {
        let prodsArr = dish.products_list;
        let prodc = [];
        prodsArr.map(prod => (
            // prod.push(prod)
            getPr(prod)
        ));
        // console.log(prodc);
    }

    return (
        <div>
            <h3>{dish.name}</h3>
            <div>
                <h4>Используемые продукты</h4>
                <List>
                    {

                    }
                </List>

                {/*<button onClick={getProducts}>GET</button>*/}
            </div>
        </div>
    )
}

export default Dish;
