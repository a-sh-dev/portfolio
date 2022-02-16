import tw, { styled } from 'twin.macro';
import {
  bgColorVariants,
  iconSizeVariants,
  textColorVariants,
} from '../../styles/stylesData';

const IconWrapper = styled.span(() => [
  tw`
    grid
    place-items-center
    rounded-full
    flex-shrink-0
  `,
  ({ size = 'normal' }) => iconSizeVariants[size],
  ({ color = 'dark' }) => textColorVariants[color],
  ({ bg = 'white' }) => bgColorVariants[bg],
]);

const Icon = ({ size, color, bg, emoji, children }) => {
  return (
    <IconWrapper color={color} bg={bg} size={size}>
      <div
        className={emoji ? 'pt-px lg:pt-0.5 aspect-square' : 'aspect-square'}
        aria-hidden="true"
      >
        {children}
      </div>
    </IconWrapper>
  );
};

export default Icon;
