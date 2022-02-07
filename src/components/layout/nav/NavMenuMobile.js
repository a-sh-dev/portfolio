import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { useAppContext } from '../../../context';
import { HiX } from 'react-icons/hi';

const NavMenuWrapper = tw.div`
  md:hidden
  fixed
  // top-0
  // left-0
  bg-black/80
  w-screen
  h-full
  grid
  z-50
`;

const NavMenuContainer = tw.div`
  
`;

const NavMenuMobile = () => {
  const { isNavOpen, closeNavMenu } = useAppContext();
  return (
    <NavMenuWrapper>
      <NavMenuContainer>.</NavMenuContainer>
    </NavMenuWrapper>
  );
};

export default NavMenuMobile;
