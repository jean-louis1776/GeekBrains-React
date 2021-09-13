import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#2e2e2e'
                },
            },
        },

        MuiFormLabel: {
            "&:root": {
                overflowX: 'clip'
            }
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#1e88e5',
        },
        secondary: {
            main: '#1976d2',
        },
    },
});

export default theme;