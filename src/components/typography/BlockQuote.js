import tw, { styled } from 'twin.macro';
import { Line } from '..';
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
   lg:text-6xl
   xl:text-7xl
   xl:leading-tight
  `,
  ({ color = 'dark' }) => textColorVariants[color],
  ({ align = 'left' }) => textAlignVariants[align],
]);

const QuoteBy = styled.p(() => [
  tw`
    flex
    gap-2
    items-center
    text-primary-dark
    text-lg
    tracking-wider
    uppercase
    mt-6
    md:text-xl
    lg:text-2xl
    xl:text-3xl
    xl:pt-5
  `,
]);

const BlockQuote = ({ noMargin, align, color, subline, children }) => {
  return (
    <Wrapper {...{ noMargin }}>
      <StyledBlockQuote align={align} color={color}>
        {children}
      </StyledBlockQuote>
      {subline && (
        <QuoteBy>
          <span className="w-8 md:w-12">
            <Line />
          </span>
          <span>{subline}</span>
        </QuoteBy>
      )}
    </Wrapper>
  );
};

export default BlockQuote;
