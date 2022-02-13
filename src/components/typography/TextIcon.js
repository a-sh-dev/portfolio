import tw, { styled } from 'twin.macro';
import { textColorVariants } from '../../../styles/stylesData';

const IconWrapper = styled.span(({ nudgeTop, noMargin, noGutter }) => [
  tw`
    inline-block
    align-baseline
    relative
    top-0.5
    mx-1.5
    md:mx-2
    // xl:mx-2.5
  `,
  nudgeTop && tw`top-1`,
  noGutter && tw`top-0`,
  noMargin && tw`md:m-0 xl:m-0 2xl:m-0`,
  ({ color = 'darkest' }) => textColorVariants[color],
]);

const TextIcon = ({ color, nudgeTop, noGutter, noMargin, children }) => {
  return (
    <IconWrapper color={color} {...{ nudgeTop, noGutter, noMargin }}>
      {children}
    </IconWrapper>
  );
};

export default TextIcon;
