import tw, { styled } from 'twin.macro';
import {
  fontStyleVariants,
  textAlignVariants,
  textColorVariants,
} from '../../../styles/stylesData';

const StyledSubHeading = styled.p(() => [
  tw`
   font-mono 
   text-lg
   mb-8
   md:mt-4
   md:text-xl
   xl:text-2xl
   xl:leading-tight
   xl:mb-14
  `,
  ({ color = 'dark' }) => textColorVariants[color],
  ({ align = 'left' }) => textAlignVariants[align],
  ({ style = 'italic' }) => fontStyleVariants[style],
]);

const SubHeading2 = ({ style, align, color, children }) => {
  return (
    <>
      <StyledSubHeading align={align} color={color} style={style}>
        {children}
      </StyledSubHeading>
    </>
  );
};

export default SubHeading2;
