import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import { Footer, Navigation } from '.';
import Meta from '../Meta';

const Wrapper = styled.div(() => [
  tw`
    flex
    flex-col
    min-h-screen
  `,
]);

const AppLayout = ({ children }) => {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <>
      <Meta />
      <Wrapper>
        <Navigation currentPage={currentPage} />
        <div className="flex-1">{children}</div>
        <Footer currentPage={currentPage} />
      </Wrapper>
    </>
  );
};

export default AppLayout;
