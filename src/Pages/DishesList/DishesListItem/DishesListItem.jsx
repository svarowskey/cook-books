import style from './DishesListItem.module.scss';
import {NavLink} from "react-router-dom";
import {ListItem, ListItemText} from "@material-ui/core";

const DishesListItem = (props) => {
    return (
        <ListItem>
            <NavLink to={'/dish/' + props.data.id}>
                <ListItemText>
                    {props.data.name}
                </ListItemText>
            </NavLink>
        </ListItem>
    )
}

export default DishesListItem;
