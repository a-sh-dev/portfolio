import tw, { styled } from 'twin.macro';
import { maxWidthVariants } from '../../data';

// default content max-width screen is 1280px (xl)

const StyledContainer = styled.div(() => [
  tw`
    container
    border
    px-6
    max-w-screen-xl
    mx-auto
    // md:px-24
    // xl:px-32 
  border-gray-600
  `,
  ({ maxWidth = 'xl' }) => maxWidthVariants[maxWidth],
]);

const Container = ({ maxWidth, children }) => {
  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
};

export default Container;
