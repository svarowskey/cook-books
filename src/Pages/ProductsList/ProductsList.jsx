import style from './ProductsList.module.scss';
import useApi from '../../hooks/api';
import ProductsListItem from "./ProductsListItem/ProductsListItem";
import {List} from "@material-ui/core";

const ProductsList = () => {
    const {data: {products}, actions} = useApi();
    return (
        <List>
            {products.map(product => {
                return <ProductsListItem data={product} key={product.id} />
            })}
        </List>
    )
}

export default ProductsList;
