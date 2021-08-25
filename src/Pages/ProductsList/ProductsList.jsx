import style from './ProductsList.module.scss';
import useApi from '../../hooks/api';
import ProductListItem from "./ProductListItem/ProductListItem";

const ProductsList = () => {
    const {data: {products}, actions} = useApi();

    return (
        <div>
            {products.map(product => {
                return <ProductListItem data={product} />
            })}
        </div>
    )
}

export default ProductsList;
