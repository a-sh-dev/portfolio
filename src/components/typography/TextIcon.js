import tw, { styled } from 'twin.macro';
import { textColorVariants } from '../../../styles/stylesData';

const IconWrapper = styled.span(({ nudgeTop, noGutter }) => [
  tw`
    inline-block
    align-baseline
    relative
    top-0.5
    mx-1.5
    xl:mx-3
    2xl:mx-6
  `,
  nudgeTop && tw`top-1`,
  noGutter && tw`top-0`,
  ({ color = 'darkest' }) => textColorVariants[color],
]);

const TextIcon = ({ color, nudgeTop, noGutter, children }) => {
  return (
    <IconWrapper color={color} {...{ nudgeTop, noGutter }}>
      {children}
    </IconWrapper>
  );
};

export default TextIcon;
