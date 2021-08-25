import style from './ProductListItem.module.scss';

const ProductListItem = (props) => {
    return (
        <div key={props.data.id}>
            <span>{props.data.name}</span>
        </div>
    )
}

export default ProductListItem;
