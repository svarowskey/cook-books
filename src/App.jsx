import {useEffect, useState} from "react";
import './App.css';

const App = (props) => {
    const [themeState, setTheme] = useState('light');

    if (!localStorage?.getItem('Theme')) {
        localStorage.setItem('Theme', 'light');
        setTheme('light');
    }

    let currentTheme = localStorage?.getItem('Theme');

    useEffect(() => {
        setTheme(currentTheme);
    }, [currentTheme]);

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
        <div className="App">

        </div>
    );
}

export default App;
