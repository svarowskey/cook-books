import style from './Products.module.scss';
import useApi from '../../hooks/api';
import Product from "./Product/Product";

const Products = () => {
    const {data: {products}, actions} = useApi();

    return (
        <div>
            {products.map(product => {
                return <Product data={product} />
            })}
        </div>
    )
}

export default Products;
