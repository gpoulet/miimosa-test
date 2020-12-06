import { useEffect } from 'react'
import '../styles/globals.css';
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/";
import TopBar from '../components/TopBar'
import CustomThemeProvider from '../components/CustomThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CustomThemeProvider>
        <CssBaseline/>
        <TopBar />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </CustomThemeProvider>
    </>
  );
}

export default App;