import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Form from './components/views/Form/Form';
import { CssBaseline } from '@mui/material';
import { StylesProvider} from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


/*
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
*/

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2B4C6F',
      },
      // secondary: {main: '#11cb5f' },
    },
  });
  return (
    <div className="App">
      <Provider store={store}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>
              <Form />
            </MainLayout>    
          </ThemeProvider>       
        </StylesProvider>
      </Provider>
    </div>
  );
}

export default App;
