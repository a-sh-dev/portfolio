import tw, { styled } from 'twin.macro';
import { AshLogo, CareRingIcon } from './svgs';
import { bgColorVariants } from '../data';

const StickerWrapper = styled.div(() => [
  tw`
    inline-grid
    place-items-center
    text-8xl
    p-3.5
    rounded-full
    relative
    text-primary-dark
    hover:text-primary-darkest
    hover:bg-white
    transition-all
    duration-500
  `,
  ({ color = 'pink' }) => bgColorVariants[color],
]);

const SloganSticker = ({ color = 'pink', withLogo, children }) => {
  return (
    <StickerWrapper {...{ color }}>
      {withLogo && <AshLogo className="absolute text-5xl fill-current" />}
      <span className="animate-spin-slow">
        <CareRingIcon className="fill-current" />
      </span>
    </StickerWrapper>
  );
};

export default SloganSticker;
