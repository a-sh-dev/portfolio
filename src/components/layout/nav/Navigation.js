import { useAppContext } from '../../../context';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { Container } from '..';
import { Line } from '../..';
import { HiOutlineX } from 'react-icons/hi';
import { navLinks } from '../../../data';
import { uniformTransition } from '../../../../styles/stylesData';
import NavMenuMobile from './NavMenuMobile';
import NavItem from './NavItem';
import NavLogo from './NavLogo';

const NavWrapper = styled.div(() => [
  tw`
    sticky
    top-0
    z-50
    pt-4
    pb-2
    bg-primary-light
    md:pt-8
  `,
  uniformTransition,
]);

const NavBar = styled.nav(() => [
  tw`
    flex
    items-center
  `,
]);

const LogoWrapper = styled.div(() => [
  tw`
    text-primary-dark
    text-6xl
    hover:text-primary-darkest
    md:text-8xl
  `,
  uniformTransition,
]);

const NavLine = tw.div`
  mx-2.5
  flex-1
`;

const NavLineEnd = tw.div`
  hidden
  md:block
  md:w-5
  xl:w-8
`;

const NavMenu = tw.div`
  hidden
  md:flex
  md:items-center
`;

const outlinedBtnBase = tw`border border-primary-dark text-primary-dark rounded-full hover:(bg-primary-dark text-primary-light) md:hidden`;

const MobileBtnMenu = styled.button(() => [
  tw`
    md:hidden
    uppercase
    tracking-widest
    font-semibold
    text-xs
    py-2
    px-4
`,
  outlinedBtnBase,
  uniformTransition,
]);

const MobileBtnCloseMenu = styled.button(() => [
  tw`
    text-lg
    p-2
  `,
  outlinedBtnBase,
  uniformTransition,
]);

const Navigation = ({ currentPage }) => {
  const { isNavOpen, openNavMenu, closeNavMenu } = useAppContext();

  return (
    <NavWrapper {...{ isNavOpen }}>
      <div className="relative">
        <Container maxWidth="max">
          <NavBar>
            <LogoWrapper>
              <Link href="/" passHref>
                <NavLogo />
              </Link>
            </LogoWrapper>
            <NavLine>
              <Line />
            </NavLine>
            <NavMenu>
              {navLinks.map((link) => {
                return (
                  <NavItem
                    key={link.id}
                    link={link}
                    currentPage={currentPage}
                  />
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
