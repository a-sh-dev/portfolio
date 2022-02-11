import tw, { styled } from 'twin.macro';
import {
  fontSizeVariants,
  textAlignVariants,
  textColorVariants,
} from '../../../styles/stylesData';

const StyledParagraph = styled.p(() => [
  tw`
   font-sans 
   leading-relaxed
  `,
  ({ color = 'dark' }) => textColorVariants[color],
  ({ size = 'paragraph' }) => fontSizeVariants[size],
  ({ align = 'left' }) => textAlignVariants[align],
]);

const Paragraph = ({ align, color, size, children }) => {
  return (
    <>
      <StyledParagraph color={color} size={size} align={align}>
        {children}
      </StyledParagraph>
    </>
  );
};

export default Paragraph;
