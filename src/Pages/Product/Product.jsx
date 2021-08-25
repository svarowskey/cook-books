import style from './Product.module.scss';
import useApi from "../../hooks/api";
import {useEffect} from "react";

const Product = ({match}) => {
    const {data: {product}, actions} = useApi();
    useEffect(() => {
        actions.getProductById(match.params.productId);
    }, [])

    return (
        <div>
            <span>{product.name}</span>
        </div>
    )
}

export default Product;
