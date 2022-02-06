import tw, { styled } from 'twin.macro';
import { textAlignVariants, textColorVariants } from '../../data';

const StyledSubHeading = styled.h2(() => [
  tw`
   font-sans 
   font-bold
   tracking-tight
   text-2xl
   my-12
   md:my-16
   md:text-3xl
   xl:text-5xl
   xl:leading-tight
  `,
  ({ color = 'dark' }) => textColorVariants[color],
  ({ align = 'left' }) => textAlignVariants[align],
]);

const SubHeading = ({ align, color, children }) => {
  return (
    <>
      <StyledSubHeading align={align} color={color}>
        {children}
      </StyledSubHeading>
    </>
  );
};

export default SubHeading;
