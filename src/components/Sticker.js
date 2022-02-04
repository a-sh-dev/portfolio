import tw, { styled } from 'twin.macro';
import { bgColorVariants } from '../data';

// ! Sticker is the highlighted label in italic Space Mono

const StickerWrapper = styled.div(() => [
  tw`
    inline-block
    px-6
    pt-1.5
    pb-2
    my-4
    whitespace-nowrap
    rounded-sm
    border-b-2
    border-primary-light
    transition-all
    duration-500
    text-sm
    md:text-lg
  `,
  `
    transform: rotate(-1.5deg);
    &:hover {
      transform: rotate(0deg);
      transform: scale(1.15)
    }
  `,
  ({ color = 'teal' }) => bgColorVariants[color],
]);

const Text = tw.h5`
  font-mono
  font-bold
  italic
  text-primary-dark
  inline-flex
  items-baseline
`;

const Icon = tw.span`
  self-center
  ml-1.5
`;

const Sticker = ({ text, color, children }) => {
  return (
    <StickerWrapper color={color}>
      <Text>
        {text}
        {children && <Icon>{children}</Icon>}
      </Text>
    </StickerWrapper>
  );
};

export default Sticker;
