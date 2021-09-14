import style from './Product.module.scss';
import useApi from "../../hooks/api";
import {useEffect} from "react";

const Product = ({match}) => {
    const {data: {product}, actions} = useApi();
    useEffect(() => {
        actions.getProductById(match.params.productId);
    }, [])

    const productPic = product.urlPic ? <img src={product.urlPic} alt="product`s picture" className={style.product_img}/> : '';

    return (
        <div>
            <h3>{product.name}</h3>
            {productPic}
            <div className={style.product_description}>
                {product.description}
            </div>
        </div>
    )
}

export default Product;
