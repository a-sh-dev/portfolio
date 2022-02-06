import tw, { styled } from 'twin.macro';

const Wrapper = styled.div(({ noGutter }) => [
  tw`
    flex
    w-full
    my-4
  `,
  noGutter && tw`my-0`,
]);

const StyledLine = tw.div`
  h-px
  bg-primary-dark
  flex-1
`;

const Line = ({ noGutter, children }) => {
  return (
    <Wrapper {...{ noGutter }}>
      <StyledLine>{children}</StyledLine>
    </Wrapper>
  );
};

export default Line;
