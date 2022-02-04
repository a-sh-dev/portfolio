import tw, { styled } from 'twin.macro';
import { Container } from '..';
import { Line } from '../..';
import { AshLogo } from '../../svgs';

const NavWrapper = tw.div`
  sticky
  top-0
  z-50
  bg-primary-light
`;

const NavBar = tw.nav`
  flex
  items-center
  py-2
`;

const LogoWrapper = tw.div`
  text-primary-dark
  text-6xl
  md:text-8xl
`;

const NavLine = tw.div`
  mx-4
  flex-1
`;

const NavMenu = tw.ul`
  flex
  items-center
`;

const NavMenuMobile = tw.ul`

`;

const NavLink = tw.li`

`;

const Navigation = () => {
  return (
    <NavWrapper>
      <Container>
        <NavBar>
          <LogoWrapper>
            <AshLogo />
          </LogoWrapper>
          <NavLine>
            <Line />
          </NavLine>
          <NavMenu>Link1 Link2</NavMenu>
        </NavBar>
      </Container>
    </NavWrapper>
  );
};

export default Navigation;
