import { AppProvider } from '../context';
import { AppLayout } from '../components/layout';
import { AnimatePresence } from 'framer-motion';
import '../../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <AppProvider>
          <AppLayout>
            <Component key={router.route} {...pageProps} />
          </AppLayout>
        </AppProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
