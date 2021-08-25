import style from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

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
    return(
        <div className={style.menu_container}>
            <div className={style.menu_wrapper}>
                <nav className={style.nav}>
                    <List>
                        <ListItem button key='Продукты'>
                            <ListItemIcon>'EmojiFoodBeverage'</ListItemIcon>
                            <ListItemText primary='Продукты' />
                        </ListItem>
                        <ListItem button key='Блюда'>
                            <ListItemIcon>'fastfood'</ListItemIcon>
                            <ListItemText primary='Блюда' />
                        </ListItem>
                        <ListItem button key='Рецепты'>
                            <ListItemIcon>'list'</ListItemIcon>
                            <ListItemText primary='Рецепты' />
                        </ListItem>
                    </List>
                </nav>
            </div>
        </div>
    )
}

export default Menu;
