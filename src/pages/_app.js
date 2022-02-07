import '../../styles/globals.css';
import { AppLayout } from '../components/layout';
import { AppProvider } from '../context';

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
