import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import { uniformTransition } from '../../../../styles/stylesData';

const ItemContainer = styled.a(() => [
  tw`
    inline-flex
    items-center
    justify-start
    rounded-full
    bg-primary-light
    cursor-pointer
    border
    border-primary-dark
    p-1
    mr-2
    xl:p-1.5
    xl:mr-3
  `,
  uniformTransition,
]);

const ItemName = styled.span(() => [
  tw`
  text-primary-dark
  font-semibold
    px-2
    whitespace-nowrap
    xl:text-lg
    xl:px-3
  `,
  uniformTransition,
]);

const IconWrapper = styled.span(() => [
  tw`
    grid
    place-items-center
    text-lg
    text-primary-dark
    pl-2
    xl:pl-3
  `,
  uniformTransition,
]);

const NavItem = ({ link }) => {
  const { id, name, svg, current, url } = link;
  return (
    <>
      <Link href={url} passHref>
        <div className="group">
          <ItemContainer key={id} className="group-hover:bg-primary-dark">
            <IconWrapper className="group-hover:text-white">{svg}</IconWrapper>
            <ItemName className="group-hover:text-white">{name}</ItemName>
          </ItemContainer>
        </div>
      </Link>
    </>
  );
};

export default NavItem;
