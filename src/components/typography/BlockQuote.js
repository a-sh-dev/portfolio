import tw, { styled } from 'twin.macro';
import {
  textAlignVariants,
  textColorVariants,
} from '../../../styles/stylesData';

const Wrapper = styled.div(({ noMargin }) => [
  tw`
    my-12
    md:my-16
    xl:my-20
  `,
  noMargin && tw`m-0 md:m-0`,
]);

const StyledBlockQuote = styled.p(() => [
  tw`
   font-sans 
   font-bold
   tracking-tight
   text-3xl
   md:text-5xl
   md:leading-tight
   xl:text-7xl
   xl:leading-tight
  `,
  ({ color = 'dark' }) => textColorVariants[color],
  ({ align = 'left' }) => textAlignVariants[align],
]);

const QuoteBy = styled.p(() => [
  tw`
  
  `,
]);

const BlockQuote = ({ noMargin, align, color, children }) => {
  return (
    <Wrapper>
      <StyledBlockQuote align={align} color={color} {...{ noMargin }}>
        {children}
      </StyledBlockQuote>
    </Wrapper>
  );
};

export default BlockQuote;
