import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { SloganSticker, Sticker } from '..';
import { HiMusicNote } from 'react-icons/hi';

const Hello = tw.h2`
  inline-block
  font-mono
  uppercase
  text-2xl
  md:text-6xl
  tracking-widest
  text-primary-dark
  mt-16
  py-3
  pl-10
  w-9/12
  border-b
  border-primary-dark
`;

const Title = tw.h1`
  font-extrabold
  text-primary-dark
  text-5xl
  md:text-9xl
  tracking-tight
  pt-3
  pb-5
  border-b
  border-primary-dark
  w-10/12
  absolute
  right-0
`;

const Profile = styled.div``;

const MainHero = () => {
  return (
    <header>
      <Hello>Hello, World~</Hello>
      <Title>I am Angie.</Title>
      <p>
        An experienced graphic designer who fell in love with coding and is
        pursuing a front-end developer career.
      </p>
      <div className="relative flex">
        <Image
          src="/images/ash_profile_circle.svg"
          alt="a-sh profile illustration"
          width={250}
          height={250}
        />
        <span className="absolute z-10 left-32 -top-16">
          <SloganSticker sm />
        </span>
      </div>
      <Sticker text="It is me you're looking for~">
        <HiMusicNote />
      </Sticker>
    </header>
  );
};

export default MainHero;
