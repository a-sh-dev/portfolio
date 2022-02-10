import { Navigation } from '.';
import Meta from '../Meta';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
