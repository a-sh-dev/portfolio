import tw, { styled } from 'twin.macro';
import {
  textAlignVariants,
  textColorVariants,
  fontStyleVariants,
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
  ({ style = 'semibold' }) => fontStyleVariants[style],
]);

const BodyIntro = ({ style, noMargin, align, color, children }) => {
  return (
    <StyledParagraph
      color={color}
      align={align}
      style={style}
      {...{ noMargin }}
    >
      {children}
    </StyledParagraph>
  );
};

export default BodyIntro;
