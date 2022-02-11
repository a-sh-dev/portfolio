import tw, { styled } from 'twin.macro';
import {
  fontSizeVariants,
  textAlignVariants,
  textColorVariants,
} from '../../../styles/stylesData';

const StyledParagraph = styled.p(({ smMargin }) => [
  tw`
    font-sans 
    leading-relaxed
  `,
  smMargin && tw`mt-5 md:mt-0`, // 1.25rem
  ({ color = 'dark' }) => textColorVariants[color],
  ({ size = 'paragraph' }) => fontSizeVariants[size],
  ({ align = 'left' }) => textAlignVariants[align],
]);

const Paragraph = ({ align, color, size, smMargin, children }) => {
  return (
    <>
      <StyledParagraph
        color={color}
        size={size}
        align={align}
        {...{ smMargin }}
      >
        {children}
      </StyledParagraph>
    </>
  );
};

export default Paragraph;
