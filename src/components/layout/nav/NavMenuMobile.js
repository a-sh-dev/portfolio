import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { SloganSticker } from '../..';
import { Em, TextIcon } from '../../typography';
import { useAppContext } from '../../../context';
import { currentYear } from '../../../utils';
import { navLinks, copyright } from '../../../data';
import { uniformTransition } from '../../../../styles/stylesData';
import { GiCoffeePot } from 'react-icons/gi';
import { HiMusicNote } from 'react-icons/hi';

const uniformPadding = tw`p-8`;

const NavMenuWrapper = styled.div(() => [
  tw`
    md:hidden
    fixed
    top-[84px]
    bg-primary-darkest
    w-screen
    h-screen
    z-40
    overflow-hidden
    border-t
    border-dashed
    border-t-primary-light
    pt-4
  `,

  uniformTransition,
]);

const NavMenu = tw.div`
  grid
  place-items-center
  auto-rows-min
`;

const NavMobileItem = styled.a(() => [
  tw`
    flex
    items-center
    font-semibold
    text-xl
    text-primary-light
    w-full
    h-full
    bg-primary-darkest
    border-primary-dark
    border-b
    first:border-t
    hover:(text-white bg-black/10)
  `,
  uniformPadding,
  uniformTransition,
]);

const NavMobileIconWrapper = tw.span`
  text-xl
  text-accent-teal
  mr-8
`;

const SloganWrapper = styled.div(() => [
  tw`
    self-start
    absolute
    bottom-6
    right-6
  `,
  uniformPadding,
  `
    > * {
      transform: scale(1.5)
    }
  `,
]);

const Header = styled.header(() => [
  tw`
    text-sm
    text-accent-teal
  `,
  uniformPadding,
]);

const Copyright = styled.div(() => [
  tw`
    place-self-start
    text-primary-light
    tracking-widest
    text-sm
    font-semibold
    w-full
  `,
  uniformPadding,
]);

const Footer = tw.footer`
  grid
  content-between
  gap-4
  grid-rows-2
  relative
`;

const NavMenuMobile = () => {
  const { isNavOpen, closeNavMenu } = useAppContext();
  return (
    <>
      {isNavOpen && (
        <NavMenuWrapper>
          <Header>
            <Em>Is it me you&apos;re looking for~?</Em>
            <TextIcon color="teal" nudgeTop>
              <HiMusicNote aria-hidden="true" />
            </TextIcon>
          </Header>
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
          <Footer>
            <Copyright className="h-fit">
              <div className="uppercase">
                &copy; {currentYear}
                <span className="em-dash">--------</span> By a-sh.
                <br /> {copyright.nav}
                <TextIcon color="teal">
                  <GiCoffeePot aria-hidden="true" />
                </TextIcon>
              </div>
              <div className="mt-4 font-normal text-xs tracking-normal">
                {copyright.siteInfo}
              </div>
            </Copyright>
            <SloganWrapper>
              <SloganSticker color="teal" withLogo />
            </SloganWrapper>
          </Footer>
        </NavMenuWrapper>
      )}
    </>
  );
};

export default NavMenuMobile;
