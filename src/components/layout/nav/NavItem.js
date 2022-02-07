import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import { uniformTransition } from '../../../data';

const btnSize = tw`w-10 h-10`;

const ItemContainer = styled.a(() => [
  tw`
    flex
    items-center
    justify-center
    overflow-hidden
    rounded-full
    bg-primary-dark
    p-2
    cursor-pointer
  `,
  btnSize,
  uniformTransition,
]);

const ItemName = styled.span(() => [
  tw`
    text-lg
    text-primary-dark
    font-semibold
  `,
  uniformTransition,
]);

const IconWrapper = styled.span(() => [
  tw`
    grid
    place-items-center
    text-xl
    text-primary-light
    mr-2
    w-10
    h-10
    rounded-full
    bg-primary-dark
  `,
  btnSize,
  uniformTransition,
]);

const NavItem = ({ link }) => {
  const { id, name, svg, current, url } = link;
  return (
    <>
      <ItemContainer key={id}>
        <IconWrapper>{svg}</IconWrapper>
        <ItemName>{name}</ItemName>
      </ItemContainer>
    </>
  );
};

export default NavItem;
