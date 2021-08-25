import style from './Products.module.scss';
import useApi from '../../../hooks/api';
import {useEffect} from "react";

const Products = () => {
    const {data: {products}, actions} = useApi();

    return (
        <div>
            {products.map(product => {
                return (<div key={product.id}>
                        <span>{product.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;
