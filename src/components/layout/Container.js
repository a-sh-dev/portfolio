import tw, { styled } from 'twin.macro';
import { maxWidthVariants } from '../../data';

// default content max-width screen is 1280px (xl)

const StyledContainer = styled.div(() => [
  tw`
    px-8
    mx-auto
    md:px-16
    xl:px-0
  // border-gray-600
  `,
  ({ maxWidth = 'xl' }) => maxWidthVariants[maxWidth],
]);

const Container = ({ maxWidth, children }) => {
  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
};

export default Container;
