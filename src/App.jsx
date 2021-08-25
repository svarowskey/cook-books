import React, {useEffect, useState} from "react";
import style from './App.module.scss';
import {AppBar, CssBaseline, Drawer, Hidden, Icon, IconButton, Toolbar} from '@material-ui/core';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Menu from "./components/Menu/Menu";
import {Route, Switch} from "react-router";
import Products from "./Pages/Products/Products";
import Dishes from "./Pages/Dishes/Dishes";
import Recipes from "./Pages/Recipes/Recipes";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const App = (props) => {
    const [themeState, setTheme] = useState('light');

    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    if (!localStorage?.getItem('Theme')) {
        localStorage.setItem('Theme', 'light');
        setTheme('light');
    }

    let currentTheme = localStorage?.getItem('Theme');

    useEffect(() => {
        setTheme(currentTheme);
    }, [currentTheme]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleClick = () => {
        if (themeState === 'light') {
            setTheme('dark');
            localStorage.setItem('Theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('Theme', 'light');
        }
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
                        <Route path='/products' component={Products} />
                        <Route path='/dishes' component={Dishes} />
                        <Route path='/recipes' component={Recipes} />
                    </Switch>
            </main>
        </div>
    );
}

export default App;
