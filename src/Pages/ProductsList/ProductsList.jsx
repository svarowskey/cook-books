import style from './ProductsList.module.scss';
import useApi from '../../hooks/api';
import ProductsListItem from "./ProductsListItem/ProductsListItem";
import {Button, Icon, List} from "@material-ui/core";
import PopUp from "../../components/PopUp/PopUp";
import {useEffect, useState} from "react";

const ProductsList = () => {
    const {data: {products}, actions} = useApi();
    const [popUp, setPopUp] = useState(false);

    const handleClick = () => {
        setPopUp(false);
        actions.getProducts();
    }

    return (
        <List>
            <Button variant='outlined'
                    startIcon={<Icon>add</Icon>}
                    onClick={() => {setPopUp(true)}}>Добавить продукт</Button>
            {products.map(product => {
                return <ProductsListItem data={product} key={product.id} />
            })}
            {popUp ? <PopUp action={'add_product'} toggle={popUp} handleClick={handleClick} /> : null}
        </List>
    )
}

export default ProductsList;
