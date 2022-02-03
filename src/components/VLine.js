import tw, { styled } from 'twin.macro';

const StyledVLine = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: ${({ length }) => length || '100%'};
  background: linear-gradient(
      var(--color-css-primary-dark),
      var(--color-css-primary-dark)
    )
    no-repeat center/1px 100%;
`;

const VLine = ({ length, children }) => {
  return <StyledVLine {...{ length }}>{children}</StyledVLine>;
};

export default VLine;
