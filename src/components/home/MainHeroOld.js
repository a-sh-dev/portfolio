import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { Line, SloganSticker, Sticker } from '..';
import { HiMusicNote } from 'react-icons/hi';

const Container = styled.header(() => [
  tw`
    // bg-gray-300
    // mt-14
    grid
    justify-items-center
  `,
  `
    height: 80vh;
    grid-template-areas: 
      ".. ot .. .. .. .."
      "l1 l1 l1 l1 .. .."
      ".. tl tl tl .. .."
      ".. l2 l2 l2 l2 l2"
      ".. tx tx pf pf .."
      ".. l3 l3 pf pf .."
      ".. .. .. pf pf .."
      "st st st st st st";
  `,
]);

// grid-template-columns: repeat(2, auto) repeat(3, 1fr) auto;
// grid-template-rows: repeat(8, auto);

const Line1 = styled.div`
  grid-area: l1;
  width: 100%;
`;

const Line2 = styled.div`
  grid-area: l2;
`;

const Line3 = styled.div`
  grid-area: l3;
`;

const StickerWrapper = styled.div`
  grid-area: st;
`;

const OverTitle = styled.h2(() => [
  tw`
    // inline-block
    font-mono
    uppercase
    text-3xl
    whitespace-nowrap
    md:text-6xl
    tracking-widest
    text-primary-dark
    // py-3
  `,
  `grid-area: ot`,
]);

const Title = styled.h1(() => [
  tw`
    font-extrabold
    text-primary-dark
    text-6xl
    md:text-9xl
    tracking-tight
    pt-3
    pb-5
  `,
  `grid-area: tl`,
]);

const Text = styled.p(() => [
  tw`
    text-primary-dark
  `,
  `grid-area: tx`,
]);

const Profile = styled.div`
  /* display: flex; */
  grid-area: pf;
  grid-row: l2 / st-start;
  position: relative;
`;

const MainHeroOld = () => {
  return (
    <>
      <Container>
        <OverTitle>Hello,World~</OverTitle>
        <Line1>
          <Line />
        </Line1>
        <Title>I am Angie.</Title>
        <Line2>
          <Line />
        </Line2>
        <Text>
          An experienced graphic designer who fell in love with coding and is
          pursuing a front-end developer career.
        </Text>
        <Line3>
          <Line />
        </Line3>
        <Profile>
          <Image
            src="/images/ash_profile_circle.svg"
            alt="a-sh profile illustration"
            width={215}
            height={215}
          />
          <span className="absolute">
            <SloganSticker sm />
          </span>
        </Profile>
        <StickerWrapper>
          <Sticker text="It is me you're looking for~">
            <HiMusicNote />
          </Sticker>
        </StickerWrapper>
      </Container>
    </>
  );
};

export default MainHeroOld;
