import Meta from '../Meta';
import Navigation from './nav/Navigation';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navigation />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
