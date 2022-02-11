import tw, { styled } from 'twin.macro';
import {
  textAlignVariants,
  textColorVariants,
} from '../../../styles/stylesData';

const StyledSubHeading = styled.h2(({ noMargin }) => [
  tw`
   font-sans 
   font-bold
   tracking-tight
   text-2xl
   my-12
   md:my-16
   md:text-4xl
   xl:text-5xl
   xl:leading-tight
  `,
  noMargin && tw`m-0 md:m-0`,
  ,
  ({ color = 'dark' }) => textColorVariants[color],
  ({ align = 'left' }) => textAlignVariants[align],
]);

const BlockQuote = ({ noMargin, align, color, children }) => {
  return (
    <>
      <StyledSubHeading align={align} color={color} {...{ noMargin }}>
        {children}
      </StyledSubHeading>
    </>
  );
};

export default BlockQuote;
