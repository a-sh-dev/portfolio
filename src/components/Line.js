import tw, { styled } from 'twin.macro';

const Wrapper = styled.div(() => [
  tw`
    flex
    w-full
    my-4
  `,
]);

const StyledLine = tw.div`
  h-px
  bg-primary-dark
  flex-1
`;

const Line = ({ children }) => {
  return (
    <Wrapper>
      <StyledLine>{children}</StyledLine>
    </Wrapper>
  );
};

export default Line;
