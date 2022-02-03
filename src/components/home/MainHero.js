import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { Line, SloganSticker, Sticker, VLine } from '..';
import { HiMusicNote } from 'react-icons/hi';

const Container = styled.header(() => [
  tw`
    mt-14
    md:mt-24
    grid
    justify-items-center
    md:relative
  `,
]);

// grid-template-columns: repeat(2, auto) repeat(3, 1fr) auto;
// grid-template-rows: repeat(8, auto);

const Line1 = tw.div`
  justify-self-start
  w-11/12
  -mb-1
  md:w-8/12
  md:mt-3
  md:mb-1
`;

const Line2 = tw.div`
  w-11/12
  justify-self-end
  md:w-5/6
  md:my-4
`;

const Line3 = tw.div`
  justify-self-end
  pr-7
  w-11/12
  md:w-5/6
  pt-1
  -mb-4
  md:mt-4
  md:pr-96
`;

const StickerWrapper = styled.div``;

const OverTitle = styled.h2(() => [
  tw`
    font-mono
    uppercase
    tracking-widest
    whitespace-nowrap
    text-primary-dark
    text-3xl
    md:text-6xl
    md:w-8/12
  `,
]);

const Title = styled.h1(() => [
  tw`
    font-extrabold
    text-primary-dark
    tracking-tight
    text-6xl
    md:text-9xl
    md:w-8/12
  `,
]);

const Text = styled.p(() => [
  tw`
    text-primary-dark
    font-medium
    md:font-normal
    text-lg
    md:text-2xl
    w-4/5
    md:w-8/12
    md:pr-96
  `,
]);

const Profile = tw.div`
  flex
  relative
  p-6
  md:hidden
`;

const ProfileDesktop = tw.div`
  hidden
  md:flex
  md:absolute
  md:p-6
  md:right-64
  md:top-52
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
        {/* PROFILE FOR BIGGER SCREEN */}
        <ProfileDesktop>
          <Image
            src="/images/ash_profile_circle.svg"
            alt="a-sh profile illustration"
            width={300}
            height={300}
          />
          <div className="absolute -top-6 -right-4">
            <SloganSticker />
          </div>
        </ProfileDesktop>

        <VLine length="32rem">
          {/* PROFILE FOR MOBILE */}
          <Profile>
            <Image
              src="/images/ash_profile_circle.svg"
              alt="a-sh profile illustration"
              width={230}
              height={230}
            />
            <div className="absolute -top-6 -right-4">
              <SloganSticker />
            </div>
          </Profile>
          <StickerWrapper>
            <Sticker text="It is me you're looking for~">
              <HiMusicNote />
            </Sticker>
          </StickerWrapper>
        </VLine>
      </Container>
    </>
  );
};

export default MainHero;
