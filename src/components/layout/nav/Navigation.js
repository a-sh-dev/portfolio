import { useAppContext } from '../../../context';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { Container } from '..';
import { Line } from '../..';
import { AshLogo } from '../../svgs';
import { HiOutlineX } from 'react-icons/hi';
import NavMenuMobile from './NavMenuMobile';

const NavWrapper = styled.div(() => [
  tw`
    sticky
    top-0
    z-50
    pt-4
    pb-1
    bg-primary-light
    md:pt-8
  `,
  ({ isNavOpen }) => tw`bg-primary-darkest`,
]);

const NavBar = styled.nav(() => [
  tw`
    flex
    items-center
    // bg-accent-teal
  `,
]);

const LogoWrapper = styled.div(() => [
  tw`
    text-primary-dark
    text-6xl
    md:text-8xl
  `,
  ({ isNavOpen }) => tw`text-primary-light`,
]);

const NavLine = tw.div`
  mx-2.5
  flex-1
`;

const NavMenu = tw.ul`
  hidden
  md:flex
  md:items-center
`;

const MobileBtnMenu = tw.button`
  md:hidden
  uppercase
  tracking-widest
  font-semibold
  border
  border-primary-dark
  text-xs
  text-primary-dark
  py-2
  px-4
  rounded-full
`;

const CloseMenuContainer = tw.div`
  text-4xl
  text-primary-light
`;

const NavLink = tw.li`

`;

const Navigation = () => {
  // const { isNavOpen, openNavMenu, closeNavMenu } = useAppContext();

  let isNavOpen = true;

  return (
    <NavWrapper>
      <Container maxWidth="max">
        <NavBar>
          <LogoWrapper>
            <AshLogo />
          </LogoWrapper>
          <NavLine>
            <Line color={isNavOpen ? 'light' : 'dark'} />
          </NavLine>
          <NavMenu>Link1 Link2</NavMenu>
          {isNavOpen ? (
            <CloseMenuContainer>
              <HiOutlineX />
            </CloseMenuContainer>
          ) : (
            <MobileBtnMenu>Menu</MobileBtnMenu>
          )}
        </NavBar>
      </Container>
      <NavMenuMobile />
    </NavWrapper>
  );
};

export default Navigation;
