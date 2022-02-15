import tw, { styled } from 'twin.macro';
import {
  textAlignVariants,
  textColorVariants,
  fontStyleVariants,
  fontSizeVariants,
} from '../../../styles/stylesData';

const StyledParagraph = styled.p(({ noMargin }) => [
  tw`
   font-sans 
   text-lg
   tracking-tight
   mb-6
   md:mb-10
   md:text-xl
   md:leading-relaxed
   xl:text-2xl
   xl:leading-10
  `,
  noMargin && tw`m-0 md:m-0`,
  ({ color = 'dark' }) => textColorVariants[color],
  ({ align = 'left' }) => textAlignVariants[align],
  ({ variant = 'semibold' }) => fontStyleVariants[variant],
  ({ size = '' }) => fontSizeVariants[size],
]);

const BodyIntro = ({ variant, noMargin, align, color, size, children }) => {
  return (
    <StyledParagraph
      color={color}
      align={align}
      variant={variant}
      size={size}
      {...{ noMargin }}
    >
      {children}
    </StyledParagraph>
  );
};

export default BodyIntro;
