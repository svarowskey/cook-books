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
    const dishPic = test && test.urlPic ? <img src={test.urlPic} alt="dishes`s picture" className={style.dish_img}/> : '';

    return (
        <div>
            <h3>{test && test.name}</h3>
            {dishPic}
            <div>
                <h4>Используемые продукты</h4>
                <List>
                    {
                        test && test.products_list.map(t =>
                            <ListItem key={Math.random() * 0.333}>
                                <img src={t.urlPic} alt="products` picture" className={style.products_list__img}/>
                                <span className={style.products_list__text}>{ t.name }</span>
                            </ListItem>)
                    }
                </List>
            </div>
        </div>
    )
}

export default Dish;
