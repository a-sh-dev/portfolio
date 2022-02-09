import tw, { styled } from 'twin.macro';
import {
  textAlignVariants,
  textColorVariants,
} from '../../../styles/stylesData';

const StyledParagraph = styled.p(() => [
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
  ({ color = 'dark' }) => textColorVariants[color],
  ({ align = 'left' }) => textAlignVariants[align],
]);

const BodyIntro = ({ align, color, children }) => {
  return (
    <>
      <StyledParagraph color={color} align={align}>
        {children}
      </StyledParagraph>
    </>
  );
};

export default BodyIntro;
