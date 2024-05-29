import '@/styles/tailwind.css';

import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/theme/scheme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
