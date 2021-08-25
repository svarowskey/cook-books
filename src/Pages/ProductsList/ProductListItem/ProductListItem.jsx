import style from './ProductListItem.module.scss';

const ProductListItem = (props) => {
    return (
        <div>
            <a href={`/product/${props.data.id}`}>{props.data.name}</a>
        </div>
    )
}

export default ProductListItem;
