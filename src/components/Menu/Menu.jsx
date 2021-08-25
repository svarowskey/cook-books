import style from './Menu.module.scss';
import {NavLink} from 'react-router-dom';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {Divider, Icon, List, ListItem, ListItemText} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
    }),
);

const Menu = () => {
    const classes = useStyles();
    return (
        <div className={style.menu_container}>
            <nav className={style.menu_group}>
                <div className={`${classes.toolbar} ${style.menu_toolbar}`}>Cook books</div>
                <Divider />
                <List className={style.menu_list}>
                    <ListItem
                        className={style.menu_list_item}
                        component={NavLink}
                        button
                        key='Продукты'
                        to='/products'
                    >
                        <Icon className={style.menu_list_item_icon}>fastfood</Icon>
                        <ListItemText primary='Продукты'/>
                    </ListItem>
                    <ListItem
                        className={style.menu_list_item}
                        component={NavLink}
                        button
                        key='Блюда'
                        to='/dishes'
                    >
                        <Icon className={style.menu_list_item_icon}>ramen_dining</Icon>
                        <ListItemText primary='Блюда'/>
                    </ListItem>
                    <ListItem
                        className={style.menu_list_item}
                        component={NavLink}
                        button
                        key='Рецепты'
                        to='/recipes'
                    >
                        <Icon className={style.menu_list_item_icon}>list</Icon>
                        <ListItemText primary='Рецепты'/>
                    </ListItem>
                </List>
            </nav>
        </div>
    )
}

export default Menu;
