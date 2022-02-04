import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { Line, SloganSticker, Sticker, VLine } from '..';
import { HiMusicNote } from 'react-icons/hi';

const FluidContainer = styled.header(() => [
  tw`
    pt-20
    md:pt-24
    grid
    justify-items-center
    md:relative
    md:bg-gray-300
  `,
]);

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
    md:pl-1
  `,
]);

const Title = styled.h1(() => [
  tw`
    font-extrabold
    text-primary-dark
    tracking-tight
    text-6xl
    pb-1
    md:text-9xl
    md:w-8/12
  `,
]);

const Intro = styled.p(() => [
  tw`
    text-primary-dark
    font-medium
    md:font-normal
    text-lg
    md:text-2xl
    md:leading-relaxed
    w-5/6
    md:w-8/12
    md:pr-96
    px-2
    pt-1
    pb-7
    border-b
    border-primary-dark
  `,
]);

const Profile = tw.div`
  flex
  relative
  p-4
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
      <FluidContainer>
        <OverTitle>Hello,World~</OverTitle>
        <Line1>
          <Line />
        </Line1>
        <Title>I am Angie.</Title>
        <Line2>
          <Line />
        </Line2>
        <Intro>
          An experienced graphic designer based in Melbourne who fell in love
          with coding and is pursuing a front-end developer career.
        </Intro>
        {/* <Line3>
          <Line />
        </Line3> */}

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
          <Profile>
            <Image
              src="/images/ash_profile_circle.svg"
              alt="a-sh profile illustration"
              width={250}
              height={250}
            />
            <div className="absolute -top-6 -right-4">
              <SloganSticker />
            </div>
          </Profile>
          <StickerWrapper>
            <Sticker text="It is me you're looking for~">
              <HiMusicNote aria-hidden="true" />
            </Sticker>
          </StickerWrapper>
        </VLine>
      </FluidContainer>
    </>
  );
};

export default MainHero;
