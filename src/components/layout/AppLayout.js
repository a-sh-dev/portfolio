import { Navigation } from '.';
import Meta from '../Meta';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
