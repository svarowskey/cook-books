import style from './App.module.scss';
import {AppBar, CssBaseline, Drawer, Hidden, Icon, IconButton, Toolbar} from '@material-ui/core';
import { useTheme} from '@material-ui/core/styles';
import Menu from "./components/Menu/Menu";
import {Route, Switch} from "react-router";
import ProductsList from "./Pages/ProductsList/ProductsList";
import Dishes from "./Pages/Dishes/Dishes";
import Recipes from "./Pages/Recipes/Recipes";
import * as themeChanger from './themeChanger';
import useThemeChanger from "./themeChanger";
import {useState} from "react";
import Product from "./Pages/Product/Product";

interface Props {
    window?: () => Window;
}

const App = (props) => {
    const { window } = props;
    const classes = themeChanger.useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    const {currentTheme, changeTheme} = useThemeChanger();
    const handleChangeTheme = () => {
        changeTheme();
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={`${classes.drawer} ${style.nav}`}>
                <Hidden smUp implementation='css'>
                    <Drawer
                        container={container}
                        variant='temporary'
                        anchor={theme.direction === 'rt1' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{paper: classes.drawerPaper}}
                        ModalProps={{keepMounted: true}}
                    >
                        <Menu />
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation='css'>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant='permanent'
                        open
                    >
                        <Menu />
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                    <Switch>
                        <Route path='/products' component={ProductsList} />
                        <Route path='/product/:productId' component={Product} />
                        <Route path='/dishes' component={Dishes} />
                        <Route path='/recipes' component={Recipes} />
                    </Switch>
            </main>
        </div>
    );
}

export default App;
