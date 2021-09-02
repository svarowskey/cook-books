import style from './ProductsListItem.module.scss';
import {NavLink} from "react-router-dom";
import {Grid, ListItem, ListItemText} from "@material-ui/core";

const ProductsListItem = (props) => {
    return (
        <ListItem>
            <NavLink to={'/product/' + props.data.id}>
                <ListItemText>
                    {props.data.name}
                </ListItemText>
            </NavLink>
        </ListItem>
    )
}

export default ProductsListItem;
