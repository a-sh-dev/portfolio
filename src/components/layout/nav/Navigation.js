import tw, { styled } from 'twin.macro';
import { Container } from '..';
import { Line } from '../..';
import { AshLogo } from '../../svgs';

const NavWrapper = tw.div`
  sticky
  top-0
  z-50
  pt-4
  pb-1
  bg-primary-light
  md:pt-8
`;

const NavBar = styled.nav(() => [
  tw`
    flex
    items-center
    // bg-accent-teal
  `,
]);

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
      <Container maxWidth="max">
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
