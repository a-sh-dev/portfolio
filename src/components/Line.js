import tw, { styled } from 'twin.macro';
import { bgColorVariants } from '../../styles/stylesData';

const Wrapper = styled.div(({ noGutter }) => [
  tw`
    flex
    w-full
    my-4
  `,
  noGutter && tw`my-0`,
]);

const StyledLine = styled.div(() => [
  tw`
    h-px
    flex-1
    bg-primary-dark
  `,
  ({ color = 'dark' }) => bgColorVariants[color],
]);

const Line = ({ color, noGutter, children }) => {
  return (
    <Wrapper {...{ noGutter }} aria-hidden="true">
      <StyledLine color={color} aria-hidden="true">
        {children}
      </StyledLine>
    </Wrapper>
  );
};

export default Line;
