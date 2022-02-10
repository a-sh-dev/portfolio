import tw, { styled } from 'twin.macro';
import {
  fontSizeVariants,
  textColorVariants,
} from '../../../styles/stylesData';

const StyledParagraph = styled.p(() => [
  tw`
   font-sans 
   leading-relaxed
  `,
  ({ color = 'dark' }) => textColorVariants[color],
  ({ size = 'paragraph' }) => fontSizeVariants[size],
]);

const Paragraph = ({ color, size, children }) => {
  return (
    <>
      <StyledParagraph color={color} size={size}>
        {children}
      </StyledParagraph>
    </>
  );
};

export default Paragraph;
