import { AppProvider } from '../context';
import { AppLayout } from '../components/layout';
import { AnimatePresence } from 'framer-motion';
import '../../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AppProvider>
        <AnimatePresence mode="wait">
          <AppLayout>
            <Component key={router.route} {...pageProps} />
          </AppLayout>
        </AnimatePresence>
      </AppProvider>
    </>
  );
}

export default MyApp;
