import style from './Dish.module.scss';
import useApi from "../../hooks/api";
import {useEffect, useState} from "react";
import Product from "../Product/Product";
import {List, ListItem} from "@material-ui/core";
import {db} from "../../firebase";
import {useDocData} from "../../hooks/firestoreHooks";

const Dish = ({match}) => {
    const {data: {dish, product, dishProducts}, actions} = useApi();
    const [products, setProducts] = useState();
    const [test] = useDocData(db.collection('dishes').doc(match.params.dishId), 'products_list');

    return (
        <div>
            <h3>{test && test.name}</h3>
            <div>
                <h4>Используемые продукты</h4>
                <List>
                    {
                        test && test.products_list.map(t => <ListItem>{ t.name }</ListItem>)
                    }
                </List>

                {/*<button onClick={getProducts}>GET</button>*/}
            </div>
        </div>
    )
}

export default Dish;
