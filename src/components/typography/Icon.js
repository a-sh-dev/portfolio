import tw, { styled } from 'twin.macro';
import { textColorVariants } from '../../../styles/stylesData';

const IconWrapper = styled.span(({ nudgeTop }) => [
  tw`
    inline-block
    align-baseline
    mx-1
    text-lg
    relative
  `,
  nudgeTop && tw`top-0.5`,
  ({ color = 'darkest' }) => textColorVariants[color],
]);

const Icon = ({ color, nudgeTop, children }) => {
  return (
    <IconWrapper {...{ nudgeTop }} color={color}>
      {children}
    </IconWrapper>
  );
};

export default Icon;
