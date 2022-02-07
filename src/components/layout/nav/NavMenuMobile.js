import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { useAppContext } from '../../../context';
import { navLinks, navTransition } from '../../../data';

const NavMenuWrapper = styled.div(({ isNavOpen }) => [
  tw`
    md:hidden
    fixed
    top-20
    bg-primary-darkest
    w-screen
    h-full
    z-50
  `,
  `
    transform: translate(-100%)
  `,
  isNavOpen && `transform: translate(0)`,

  navTransition,
]);

const NavMenu = tw.div`
  grid
  place-items-center
  auto-rows-min
  pt-10
`;

const NavMobileItem = styled.a(() => [
  tw`
    flex
    items-center
    font-semibold
    text-2xl
    text-primary-light
    w-full
    h-full
    p-10
    bg-primary-darkest
    border-primary-dark
    border-b
    hover:(text-white bg-black/10)
  `,
  `

  `,
  navTransition,
]);

const NavMobileIconWrapper = tw.span`
  text-2xl
  text-primary-light
  mr-8
`;

const NavMenuMobile = () => {
  const { isNavOpen, closeNavMenu } = useAppContext();
  return (
    <>
      {isNavOpen && (
        <NavMenuWrapper {...{ isNavOpen }}>
          <NavMenu>
            {navLinks.map((navItem) => {
              const { id, name, url, svg } = navItem;
              return (
                <>
                  <Link href={url} passHref>
                    <NavMobileItem key={id} onClick={closeNavMenu}>
                      <NavMobileIconWrapper>{svg}</NavMobileIconWrapper>
                      {name}
                    </NavMobileItem>
                  </Link>
                </>
              );
            })}
          </NavMenu>
        </NavMenuWrapper>
      )}
    </>
  );
};

export default NavMenuMobile;
