import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'
import App from './App';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import store from './store';
import { Provider } from 'react-redux';

export const MyDataContext = React.createContext({
  appVersion: '0.5-alpha',
  author: 'Ilya Aleksin'
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MyDataContext.Provider value={{ appName: 'Hellogram', appVersion: '0.5-alpha', author: 'Ilya Aleksin' }}>
        <Provider store={store}>
          <App />
        </Provider>
      </MyDataContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
