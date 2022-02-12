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
  noMargin && tw`my-0 md:my-0 xl:my-0`,
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
    text-primary-dark
    text-lg
    tracking-wider
    uppercase
    md:text-xl
    xl:text-3xl
    before:content-['------']
    before:pr-3
    before:tracking-[-0.25rem]
    before:font-thin
    my-6
    xl:pt-5
  `,
]);

const BlockQuote = ({ noMargin, align, color, subline, children }) => {
  return (
    <Wrapper {...{ noMargin }}>
      <StyledBlockQuote align={align} color={color}>
        {children}
      </StyledBlockQuote>
      {subline && <QuoteBy>{subline}</QuoteBy>}
    </Wrapper>
  );
};

export default BlockQuote;
