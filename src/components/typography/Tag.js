import tw, { styled } from 'twin.macro';
import {
  bgColorVariants,
  roundVariants,
  textColorVariants,
} from '../../../styles/stylesData';

const Wrapper = styled.span(({ withMargin }) => [
  tw`
    font-sans
    uppercase
    py-1.5
    px-3
    border
    border-primary-dark
    tracking-wide
    text-xs
    font-medium
    whitespace-nowrap
    break-normal
    md:text-sm
    md:px-4
  `,
  withMargin && tw`mr-1.5 md:mr-2`,
  ({ bg = 'olive' }) => bgColorVariants[bg],
  ({ color = 'dark' }) => textColorVariants[color],
  ({ variant = 'pill' }) => roundVariants[variant],
]);

const Tag = ({ variant, bg, color, withMargin, children }) => {
  return (
    <Wrapper {...{ withMargin }} variant={variant} bg={bg} color={color}>
      {children}
    </Wrapper>
  );
};

export default Tag;
