import tw, { styled } from 'twin.macro';
import { uniformTransition } from '../../../styles/stylesData';

const StyledAHref = styled.a(() => [
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
]);

const AHref = ({ href, children }) => {
  return (
    <StyledAHref href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledAHref>
  );
};

export default AHref;
