import { useAppContext } from '../../../context';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { Container } from '..';
import { Line } from '../..';
import { AshLogo } from '../../svgs';
import { HiOutlineX } from 'react-icons/hi';
import { navLinks, navTransition } from '../../../data';
import NavMenuMobile from './NavMenuMobile';
import NavItem from './NavItem';

const NavWrapper = styled.div(({ isNavOpen }) => [
  tw`
    sticky
    top-0
    z-50
    pt-4
    pb-1
    bg-primary-light
    md:pt-8
  `,
  isNavOpen && tw`bg-primary-darkest md:bg-primary-light`,

  navTransition,
]);

const NavBar = styled.nav(() => [
  tw`
    flex
    items-center
  `,
]);

const LogoWrapper = styled.div(({ isNavOpen }) => [
  tw`
    text-primary-dark
    text-6xl
    hover:text-primary-darkest
    md:text-8xl
  `,
  isNavOpen && tw`text-primary-light hover:text-white md:text-primary-dark`,

  navTransition,
]);

const NavLine = tw.div`
  mx-2.5
  flex-1
`;

const NavLineEnd = tw.div`
  hidden
  md:block
  md:w-5
  md:ml-2.5
  xl:w-8
`;

const NavMenu = tw.ul`
  hidden
  md:flex
  md:items-center
`;

const MobileBtnMenu = styled.button(() => [
  tw`
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
    hover:(bg-primary-dark text-primary-light)
`,
  navTransition,
]);

const MobileBtnCloseMenu = tw.button`
  text-4xl
  text-primary-light
  md:hidden
`;

const Navigation = () => {
  const { isNavOpen, openNavMenu, closeNavMenu } = useAppContext();

  return (
    <NavWrapper {...{ isNavOpen }}>
      <div className="relative">
        <Container maxWidth="max">
          <NavBar>
            <LogoWrapper {...{ isNavOpen }}>
              <Link href="/" passHref>
                <AshLogo />
              </Link>
            </LogoWrapper>
            <NavLine>
              <Line color={isNavOpen ? 'light' : 'dark'} />
            </NavLine>
            <NavMenu>
              {navLinks.map((link) => {
                return (
                  <>
                    <NavItem link={link} />
                  </>
                );
              })}
            </NavMenu>
            <NavLineEnd>
              <Line />
            </NavLineEnd>

            {isNavOpen ? (
              <MobileBtnCloseMenu onClick={closeNavMenu}>
                <HiOutlineX />
              </MobileBtnCloseMenu>
            ) : (
              <MobileBtnMenu onClick={openNavMenu}>Menu</MobileBtnMenu>
            )}
          </NavBar>
        </Container>
        <NavMenuMobile />
      </div>
    </NavWrapper>
  );
};

export default Navigation;
