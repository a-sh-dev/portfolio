import { Navigation } from '.';
import Meta from '../Meta';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
