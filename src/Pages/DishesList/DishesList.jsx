import style from './DishesList.module.scss';
import useApi from '../../hooks/api';
import DishesListItem from "./DishesListItem/DishesListItem";
import {List} from "@material-ui/core";

const DishesList = () => {
    const {data: {dishes}, actions} = useApi();
    return (
        <List>
            {dishes.map(dish => {
                return <DishesListItem data={dish} key={dish.id} />
            })}
        </List>
    )
}

export default DishesList;
