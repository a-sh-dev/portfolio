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

const SubLine = styled.div(() => [
  tw`
    flex
    items-center
    gap-2
    mt-6
    xl:pt-5
  `,
]);

const QuoteBy = styled.p(() => [
  tw`
    text-primary-dark
    text-lg
    tracking-wider
    uppercase
    md:text-xl
    lg:text-2xl
    xl:text-3xl
  `,
]);

const BlockQuote = ({ noMargin, align, color, subline, children }) => {
  return (
    <Wrapper {...{ noMargin }}>
      <StyledBlockQuote align={align} color={color}>
        {children}
      </StyledBlockQuote>
      {subline && (
        <SubLine>
          <span className="w-8 md:w-12">
            <Line />
          </span>
          <QuoteBy>{subline}</QuoteBy>
        </SubLine>
      )}
    </Wrapper>
  );
};

export default BlockQuote;
