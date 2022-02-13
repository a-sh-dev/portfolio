import tw, { styled } from 'twin.macro';
import { bgColorVariants, uniformTransition } from '../../styles/stylesData';

// ! Sticker is the highlighted label in italic Space Mono

const StickerWrapper = styled.div(({ noMargin }) => [
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
    text-sm
    md:px-10
    md:text-lg
    xl:px-12
    xl:py-2.5
    xl:text-xl
    2xl:text-2xl
  `,
  `
    transform: rotate(-1.5deg);
    &:hover {
      transform: rotate(0deg);
      transform: scale(1.15)
    }
  `,
  ({ color = 'teal' }) => bgColorVariants[color],

  uniformTransition,
  noMargin && tw`m-0`,
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

const Sticker = ({ text, color, noMargin, children }) => {
  return (
    <StickerWrapper color={color} {...{ noMargin }}>
      <Text>
        {text}
        {children && <Icon>{children}</Icon>}
      </Text>
    </StickerWrapper>
  );
};

export default Sticker;
