import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { Icon, Line, SloganSticker, Sticker, VLineBg } from '..';
import { HiMusicNote, HiOutlineArrowSmDown } from 'react-icons/hi';

const FluidContainer = styled.header(() => [
  tw`
    pt-10
    grid
    justify-items-center
    md:pt-32
    md:flex
    md:relative
    xl:pt-44
  `,
]);

const MainColumn = tw.div`
  grid
  justify-items-center
  md:flex
  md:flex-col
  md:max-w-screen-sm
  xl:max-w-screen-md
  2xl:max-w-screen-lg
`;

const SideColumn = tw.div`
  hidden
  md:relative
  md:block
  md:flex-1
`;

const Line1 = tw.div`
  justify-self-start
  w-11/12
  my-1  
  md:w-5/6
  md:mt-2
  md:mb-0
  xl:mb-1
  xl:mt-3
  xl:w-2/3
`;

const Line2 = tw.div`
  w-11/12
  justify-self-end
  mt-1
  mb-2
  md:w-full
  md:my-3
  xl:my-4
`;

const Greetings = styled.h2(() => [
  tw`
    font-mono
    uppercase
    tracking-widest
    whitespace-nowrap
    text-primary-dark
    text-3xl
    md:text-5xl
    md:pl-1
    xl:text-6xl
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
    md:text-8xl
    xl:text-9xl
  `,
]);

const IntroWrapper = tw.div`
  w-5/6
  pb-7
  border-b
  border-primary-dark
  relative
  md:flex
  md:relative 
  md:w-full
  md:pt-2
  md:pb-10
  lg:pb-12
`;

const Intro = styled.p(() => [
  tw`
    text-primary-dark
    font-medium
    px-2
    text-lg
    
    md:font-normal
    md:text-xl
    md:leading-relaxed
    md:w-3/5
    md:pr-14
    xl:text-2xl
    xl:leading-[1.8]
    2xl:text-[1.75rem]
  `,
]);

// md - 768; lg - 1024; xl - 1280; 2xl - 1536

const ProfileDesktop = styled.div(() => [
  tw`
    hidden
    md:z-10
    md:flex
    md:absolute
    md:p-6
    md:-top-24
    md:-right-16
    lg:-right-20
    xl:-top-16
    xl:-right-12
    2xl:-top-20
    2xl:-right-0
  `,
  `
    @media (min-width: 1280px) {
      transform: scale(1.17);
    }
    
    @media (min-width: 1539px) {
      transform: scale(1.6);
    }
  `,
]);

const Profile = tw.div`
  flex
  relative
  p-4
  mt-4
  mb-64
  md:hidden
`;

const SloganWrapper = tw.div`
  absolute
  -top-6
  -right-4
`;

const StickerWrapper = tw.div`
  mb-24
  md:mt-96
  md:pt-96
  md:mb-20
`;

const MainHero = () => {
  return (
    <>
      <FluidContainer>
        <SideColumn>
          <div className="md:absolute md:w-full md:top-[72px] xl:top-[88px]">
            <Line noGutter />
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
              Bridging design and code, I craft user-centric solutions with a
              decade of visual expertise and empathetic problem-solving.
            </Intro>
            <ProfileDesktop>
              <Image
                src="/images/ash_profile_circle.svg"
                alt="a-sh profile illustration"
                width={300}
                height={300}
              />
              <SloganWrapper>
                <SloganSticker />
              </SloganWrapper>
            </ProfileDesktop>
          </IntroWrapper>
        </MainColumn>
        <SideColumn>
          <div className="md:absolute md:w-full md:pt-[217px] xl:pt-[273px]">
            <Line noGutter />
          </div>
        </SideColumn>
      </FluidContainer>

      <VLineBg>
        <div className="h-fit grid grid-flow-row place-items-center">
          <div
            className="hidden md:block md:animate-bounce md:relative md:top-14 2xl:top-56"
            aria-hidden="true"
          >
            <Icon size="xs">
              <HiOutlineArrowSmDown />
            </Icon>
          </div>
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
          <div
            className="animate-bounce relative -top-40 md:hidden"
            aria-hidden="true"
          >
            <Icon size="xs">
              <HiOutlineArrowSmDown />
            </Icon>
          </div>
          <StickerWrapper>
            <Sticker text="Is it me you're looking for~?">
              <HiMusicNote aria-hidden="true" />
            </Sticker>
          </StickerWrapper>
        </div>
      </VLineBg>
    </>
  );
};

export default MainHero;
