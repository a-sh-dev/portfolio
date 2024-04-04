import { styled } from 'twin.macro';

const StyledVLine = styled.div`
  display: grid;
  place-items: ${({ placeItems }) => placeItems || 'center'};
  position: relative;
  width: 100%;
  height: ${({ length }) => length || 'inherit'};
  background: linear-gradient(
      var(--color-css-primary-dark),
      var(--color-css-primary-dark)
    )
    no-repeat center/1px 100%;
`;

const VLineBg = ({ length, place, children }) => {
  return (
    <StyledVLine length={length} placeItems={place}>
      {children}
    </StyledVLine>
  );
};

export default VLineBg;
