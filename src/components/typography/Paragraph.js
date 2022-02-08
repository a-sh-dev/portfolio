import tw, { styled } from 'twin.macro';
import { textColorVariants } from '../../../styles/stylesData';

const StyledParagraph = styled.p(() => [
  tw`
   font-sans 
   text-base
   leading-relaxed
   md:text-lg
   xl:text-xl
   xl:leading-9
  `,
  ({ color = 'dark' }) => textColorVariants[color],
]);

const Paragraph = ({ color, children }) => {
  return (
    <>
      <StyledParagraph color={color}>{children}</StyledParagraph>
    </>
  );
};

export default Paragraph;
