import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#2e7031',
            main: '#43a047',
            dark: '#68b36b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#27632a',
            main: '#388e3c',
            dark: '#5fa463',
            contrastText: '#fff',
        },
    },
});

export default theme;