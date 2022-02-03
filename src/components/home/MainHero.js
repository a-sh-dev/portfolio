import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { Line, SloganSticker, Sticker } from '..';
import { HiMusicNote } from 'react-icons/hi';

const Container = styled.header(() => [
  tw`
    // bg-gray-300
    mt-14
    grid
    justify-items-center
  `,
]);

// grid-template-columns: repeat(2, auto) repeat(3, 1fr) auto;
// grid-template-rows: repeat(8, auto);

const Line1 = styled.div`
  /* grid-area: l1; */
  justify-self: start;
  width: 90%;
  margin-bottom: -0.25rem;
`;

const Line2 = styled.div`
  width: 90%;
  justify-self: end;
`;

const Line3 = styled.div`
  width: 80%;
`;

const StickerWrapper = styled.div``;

const OverTitle = styled.h2(() => [
  tw`
    font-mono
    uppercase
    text-3xl
    whitespace-nowrap
    md:text-6xl
    tracking-widest
    text-primary-dark
  `,
]);

const Title = styled.h1(() => [
  tw`
    font-extrabold
    text-primary-dark
    text-6xl
    md:text-9xl
    tracking-tight
  `,
]);

const Text = styled.p(() => [
  tw`
    text-primary-dark
    text-lg
    font-medium
  `,
  `
    width: 80%;
  `,
]);

const Profile = styled.div`
  position: relative;
  padding: 1rem;
`;

const MainHero = () => {
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
          An experienced graphic designer based in Melbourne who fell in love
          with coding and is pursuing a front-end developer career.
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

export default MainHero;
