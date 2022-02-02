import tw, { styled } from 'twin.macro';

// ! Sticker is the highlighted label in italic Space Mono

const colorVariants = {
  teal: tw`bg-accent-teal`,
  olive: tw`bg-accent-olive`,
  pink: tw`bg-accent-pink`,
  purple: tw`bg-accent-purple`,
  blue: tw`bg-accent-blue`,
};

const StickerWrapper = styled.div(() => [
  tw`
    inline-block
    px-6
    pt-1.5
    pb-2
    my-4
  `,
  `transform: rotate(-1.5deg);`,
  ({ color = 'teal' }) => colorVariants[color],
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

const Sticker = ({ text, color = 'teal', children }) => {
  return (
    <StickerWrapper {...{ color }}>
      <Text>
        {text}
        {children && <Icon>{children}</Icon>}
      </Text>
    </StickerWrapper>
  );
};

export default Sticker;
