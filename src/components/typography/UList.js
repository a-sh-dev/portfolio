import tw, { styled } from 'twin.macro';

const StyledUl = styled.ul(() => [
  tw`
    space-y-2
  `,
  `
    li {
      display: flex;
    }
    
    li::before {
      content: '•';
      color: var(--color-css-primary-darkest);
      margin-right: 0.85rem;
      padding-top: 1px;
    
      @media (min-width: 1280px) {
        padding-top: 0.45rem;
    }

    }

  `,
]);

const UList = ({ children }) => {
  return (
    <>
      <StyledUl>{children}</StyledUl>
    </>
  );
};

export default UList;
