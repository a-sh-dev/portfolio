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
   md:my-4
   md:text-xl
   md:mb-8
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
