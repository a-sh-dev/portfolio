import tw, { styled } from 'twin.macro';
import { maxWidthVariants } from '../../../styles/stylesData';

// default content max-width screen is 1280px (xl)

const StyledContainer = styled.div(({ relative, noGutter }) => [
  tw`
    px-8
    mx-auto
    sm:container
    md:px-16
    2xl:px-0
  `,
  ({ maxWidth = 'xl' }) => maxWidthVariants[maxWidth],
  relative && tw`relative`,
  noGutter && tw`p-0 md:p-0`,
]);

const Container = ({ relative, noGutter, maxWidth, children }) => {
  return (
    <StyledContainer maxWidth={maxWidth} {...{ relative, noGutter }}>
      {children}
    </StyledContainer>
  );
};

export default Container;
