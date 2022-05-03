import React from 'react'
import { ThemeProvider } from 'styled-components';

const darkTheme = {
    darkBlue: 'hsl(209, 23%, 22%)',
    veryDarkBlueBg: 'hsl(207, 26%, 17%)',
    white: 'hsl(0, 0%, 100%)'
}

const lightTheme = {
    darkBlue: 'hsl(200, 15%, 8%)',
    veryDarkBlueBg: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)'
}

const Theme = ({ children }) => {
    const [theme, setTheme] = React.useState(true);
    
    <ThemeProvider theme={theme==='light'? lightTheme : darkTheme}>
        {children}
    </ThemeProvider>
}

export default Theme