import tw, { styled } from 'twin.macro';
import { AshLogo, CareRingIcon } from './svgs';
import { bgColorVariants, uniformTransition } from '../../styles/stylesData';

const StickerWrapper = styled.div(({ lg }) => [
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
    md:(text-9xl p-4)
  `,
  ({ color = 'pink' }) => bgColorVariants[color],
  lg && tw`xl:text-10xl xl:p-5`,
  uniformTransition,
]);

const SloganSticker = ({ color, withLogo, sm, lg }) => {
  return (
    <div className={sm && `scale-90`}>
      <StickerWrapper color={color} {...{ lg }}>
        {withLogo && (
          <AshLogo className="absolute text-5xl md:text-6xl 2xl:text-7xl" />
        )}
        <span className="animate-spin-slow">
          <CareRingIcon />
        </span>
      </StickerWrapper>
    </div>
  );
};

export default SloganSticker;
