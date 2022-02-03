import tw, { styled } from 'twin.macro';
import { AshLogo, CareRingIcon } from './svgs';
import { bgColorVariants } from '../data';

const StickerWrapper = styled.div(() => [
  tw`
    inline-grid
    place-items-center
    text-8xl
    p-3
    rounded-full
    relative
    text-primary-dark
    hover:bg-primary-darkest
    hover:text-white
    transition-all
    duration-500
  `,
  ({ color = 'pink' }) => bgColorVariants[color],
]);

const SloganSticker = ({ color = 'pink', withLogo, sm, children }) => {
  return (
    <div className={sm && `scale-90`}>
      <StickerWrapper {...{ color }}>
        {withLogo && <AshLogo className="absolute text-5xl fill-current" />}
        <span className="animate-spin-slow">
          <CareRingIcon />
        </span>
      </StickerWrapper>
    </div>
  );
};

export default SloganSticker;
