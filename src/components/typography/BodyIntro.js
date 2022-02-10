import tw, { styled } from 'twin.macro';
import {
  textAlignVariants,
  textColorVariants,
} from '../../../styles/stylesData';

const StyledParagraph = styled.p(({ noMargin }) => [
  tw`
   font-sans 
   text-lg
   font-semibold
   tracking-tight
   mb-6
   md:text-xl
   md:leading-relaxed
   xl:text-2xl
   xl:leading-10
  `,
  noMargin && tw`m-0`,
  ({ color = 'dark' }) => textColorVariants[color],
  ({ align = 'left' }) => textAlignVariants[align],
]);

const BodyIntro = ({ noMargin, align, color, children }) => {
  return (
    <>
      <StyledParagraph color={color} align={align} {...{ noMargin }}>
        {children}
      </StyledParagraph>
    </>
  );
};

export default BodyIntro;
