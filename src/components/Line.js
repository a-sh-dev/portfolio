import tw, { styled } from 'twin.macro';
import { bgColorVariants } from '../../styles/stylesData';

const Wrapper = styled.div(({ noGutter, stretch }) => [
  tw`
    flex
    w-full
    my-4
  `,
  noGutter && tw`my-0`,
  stretch && tw`flex-1`,
]);

const StyledLine = styled.div(() => [
  tw`
    h-px
    flex-1
    bg-primary-dark
  `,
  ({ color = 'dark' }) => bgColorVariants[color],
]);

const Line = ({ color, noGutter, stretch, children }) => {
  return (
    <Wrapper {...{ noGutter, stretch }} aria-hidden="true">
      <StyledLine color={color} aria-hidden="true">
        {children}
      </StyledLine>
    </Wrapper>
  );
};

export default Line;
