import tw, { styled } from 'twin.macro';

const StyledVLine = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  width: 100%;
  height: ${({ length }) => length || 'inherit'};
  background: linear-gradient(
      var(--color-css-primary-dark),
      var(--color-css-primary-dark)
    )
    no-repeat center/1px 100%;
`;

const VLine = ({ length, children }) => {
  return <StyledVLine length={length}>{children}</StyledVLine>;
};

export default VLine;
