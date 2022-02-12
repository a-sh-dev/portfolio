import tw, { styled } from 'twin.macro';
import { maxWidthVariants } from '../../../styles/stylesData';

// default content max-width screen is 1280px (xl)

const StyledContainer = styled.div(({ relative }) => [
  tw`
    px-8
    mx-auto
    md:container
    md:px-16
    xl:px-0
  `,
  ({ maxWidth = 'xl' }) => maxWidthVariants[maxWidth],
  relative && tw`relative`,
]);

const Container = ({ relative, maxWidth, children }) => {
  return (
    <StyledContainer maxWidth={maxWidth} {...{ relative }}>
      {children}
    </StyledContainer>
  );
};

export default Container;
