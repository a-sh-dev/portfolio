import tw, { styled } from 'twin.macro';
import { uniformTransition } from '../../../styles/stylesData';

const StyledAHref = styled.a(({ noBold }) => [
  tw`
    border-b
    border-white
    font-bold
    px-1
    py-0.5
    hover:bg-white
  `,
  `
    box-shadow: inset 0 -1px 0 white;
  `,
  uniformTransition,
  noBold && tw`font-normal`,
]);

const AHref = ({ href, noBold, children }) => {
  return (
    <StyledAHref
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...{ noBold }}
    >
      {children}
    </StyledAHref>
  );
};

export default AHref;
