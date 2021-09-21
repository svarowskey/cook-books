import style from './DishesList.module.scss';
import useApi from '../../hooks/api';
import DishesListItem from "./DishesListItem/DishesListItem";
import {Button, Icon, List} from "@material-ui/core";
import PopUp from "../../components/PopUp/PopUp";
import {useState} from "react";

const DishesList = () => {
    const {data: {dishes}, actions} = useApi();
    const [popUp, setPopUp] = useState(false);

    const handleClick = () => {
        setPopUp(false);
        actions.getDishes();
    }
    return (
        <div>
            <Button variant='outlined'
                    startIcon={<Icon>add</Icon>}
                    onClick={() => {setPopUp(true)}}>Добавить блюдо</Button>
            <List>
                {dishes.map(dish => {
                    return <DishesListItem data={dish} key={dish.id} />
                })}
            </List>
            {popUp ? <PopUp action={'add_dish'} toggle={popUp} handleClick={handleClick} /> : null}
        </div>
    )
}

export default DishesList;
