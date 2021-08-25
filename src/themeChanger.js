import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";

export default function useThemeChanger() {
    const [themeState, setTheme] = useState('light');
    if (!localStorage?.getItem('Theme')) {
        localStorage.setItem('Theme', 'light');
        setTheme('light');
    }
    let currentTheme = localStorage?.getItem('Theme');

    useEffect(() => {
        setTheme(currentTheme);
    }, [currentTheme]);

    function changeTheme() {
        if (themeState === 'light') {
            setTheme('dark');
            localStorage.setItem('Theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('Theme', 'light');
        }
    }

    return {
        currentTheme,
        changeTheme,
    }
}

export const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
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

