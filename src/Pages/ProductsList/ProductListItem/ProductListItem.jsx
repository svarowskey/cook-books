import style from './ProductListItem.module.scss';
import {NavLink} from "react-router-dom";

const ProductListItem = (props) => {
    return (
        <div>
            <NavLink to={'/product/' + props.data.id}>
                {props.data.name}
            </NavLink>
        </div>
    )
}

export default ProductListItem;
