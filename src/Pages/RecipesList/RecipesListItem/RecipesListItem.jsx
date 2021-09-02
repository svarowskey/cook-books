import style from './RecipesListItem.module.scss';
import {NavLink} from "react-router-dom";
import {ListItem, ListItemText} from "@material-ui/core";

const RecipesListItem = (props) => {
    return (
        <ListItem>
            <NavLink to={'/recipe/' + props.data.id}>
                <ListItemText>
                    {props.data.name}
                </ListItemText>
            </NavLink>
        </ListItem>
    )
}

export default RecipesListItem;
