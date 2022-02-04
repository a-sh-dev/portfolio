import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { Line, SloganSticker, Sticker, VLine } from '..';
import { HiMusicNote } from 'react-icons/hi';

const FluidContainer = styled.header(() => [
  tw`
    pt-20
    md:pt-24
    grid
    md:flex
    justify-items-center
    md:relative
    // md:bg-gray-300
  `,
]);

const MainColumn = tw.div`
  grid
  justify-items-center
  md:flex
  md:flex-col
  md:max-w-screen-md
  xl:max-w-screen-lg
  xl:border-b
  xl:border-primary-dark
  // md:bg-gray-400
`;

const SideColumn = tw.div`
  hidden
  md:block
  md:flex-1
`;

const Line1 = tw.div`
  justify-self-start
  w-11/12
  my-1  
  md:w-11/12
  md:mt-3
  md:mb-1
`;

const Line2 = tw.div`
  w-11/12
  justify-self-end
  mt-1
  mb-2
  md:w-full
  md:my-4
`;

const StickerWrapper = styled.div``;

const Greetings = styled.h2(() => [
  tw`
    font-mono
    uppercase
    tracking-widest
    whitespace-nowrap
    text-primary-dark
    text-3xl
    md:text-6xl
    xl:text-7xl
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
    whitespace-nowrap
    md:text-9xl
    xl:text-10xl
  `,
]);

const IntroWrapper = tw.div`
  w-5/6
  md:flex
  md:relative 
  // md:bg-blue-100
  md:w-full
  md:pt-3
  md:pb-5
  xl:pb-6
  md:border-b
  md:border-primary-dark
  xl:border-none
`;

const Intro = styled.p(() => [
  tw`
    text-primary-dark
    font-medium
    md:font-normal
    text-lg
    md:text-2xl
    xl:text-3xl
    md:leading-relaxed
    xl:leading-[1.7]
    md:w-3/5
    px-2
    pb-7
    border-b
    border-primary-dark
    md:border-none
  `,
]);

const ProfileDesktop = styled.div(() => [
  tw`
    hidden
    md:flex
    md:absolute
    md:p-6
    md:-top-20
    md:-right-20
    xl:-top-14
  `,
  `
    @media (min-width: 1280px) {
      transform: scale(1.25);
    }
  `,
]);

const Profile = tw.div`
  flex
  relative
  p-4
  md:hidden
`;

const SloganWrapper = tw.div`
  absolute
  -top-6
  -right-4
`;

const MainHero = () => {
  return (
    <>
      <FluidContainer>
        <SideColumn>
          <div className="md:pt-[72px] xl:pt-[84px]">
            <Line />
          </div>
        </SideColumn>
        <MainColumn>
          <Greetings>Hello,World~</Greetings>
          <Line1>
            <Line />
          </Line1>
          <Title>I am Angie.</Title>
          <Line2>
            <Line />
          </Line2>
          <IntroWrapper>
            <Intro>
              An experienced graphic designer based in Melbourne who fell in
              love with coding and is pursuing a front-end developer career.
            </Intro>
            <ProfileDesktop>
              <Image
                src="/images/ash_profile_circle.svg"
                alt="a-sh profile illustration"
                width={320}
                height={320}
              />
              <SloganWrapper>
                <SloganSticker />
              </SloganWrapper>
            </ProfileDesktop>
          </IntroWrapper>
        </MainColumn>
        <SideColumn>
          <div className="md:pt-[257px] xl:pt-[317px]">
            <Line />
          </div>
        </SideColumn>
      </FluidContainer>

      <VLine length="32rem">
        <Profile>
          <Image
            src="/images/ash_profile_circle.svg"
            alt="a-sh profile illustration"
            width={250}
            height={250}
          />
          <SloganWrapper>
            <SloganSticker />
          </SloganWrapper>
        </Profile>
        <StickerWrapper>
          <Sticker text="It is me you're looking for~">
            <HiMusicNote aria-hidden="true" />
          </Sticker>
        </StickerWrapper>
      </VLine>
    </>
  );
};

export default MainHero;
