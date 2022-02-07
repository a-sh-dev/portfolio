import { AppProvider } from '../context';
import { AppLayout } from '../components/layout';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppProvider>
    </>
  );
}

export default MyApp;
