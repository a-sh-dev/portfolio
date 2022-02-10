import tw, { styled } from 'twin.macro';
import { textColorVariants } from '../../../styles/stylesData';

const IconWrapper = styled.span(({ nudgeTop }) => [
  tw`
    inline-block
    align-baseline
    mx-1.5
    text-lg
    relative
    top-0.5
  `,
  nudgeTop && tw`top-1`,
  ({ color = 'darkest' }) => textColorVariants[color],
]);

const Icon = ({ color, nudgeTop, children }) => {
  return (
    <IconWrapper color={color} {...{ nudgeTop }}>
      {children}
    </IconWrapper>
  );
};

export default Icon;
