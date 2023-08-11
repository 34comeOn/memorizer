import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { defaultTheme } from './global/theme';
import { AppRouter } from './AppRouter';
import { ForceRenderProvider } from './myContext/forceRenderProvider';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ForceRenderProvider >
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
    </ForceRenderProvider>
  </React.StrictMode>
);
