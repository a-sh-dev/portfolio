import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import { uniformSlowTransition } from '../../../data';

const btnSize = tw`w-10 h-10`;

const ItemContainer = styled.a(() => [
  tw`
    inline-flex
    items-center
    justify-start
    overflow-hidden
    rounded-full
    bg-primary-dark
    cursor-pointer
    p-2.5
    mr-2
    // flex-shrink-0
    // hover:w-full
  `,
  btnSize,
  uniformSlowTransition,
]);

const ItemName = styled.span(() => [
  tw`
    text-lg
    text-primary-light
    font-semibold
    px-4
    whitespace-nowrap
    // opacity-0
    // hover:block
  `,
  uniformSlowTransition,
]);

const IconWrapper = styled.span(() => [
  tw`
    grid
    place-items-center
    text-xl
    text-primary-light
  `,
  // btnSize,
  uniformSlowTransition,
]);

const NavItem = ({ link }) => {
  const { id, name, svg, current, url } = link;
  return (
    <>
      <div className="group">
        <ItemContainer key={id} className="group-hover:w-fit">
          <IconWrapper className="will-change-auto group-hover:text-white group-hover:pl-2">
            {svg}
          </IconWrapper>
          <ItemName className="group-hover:block group-hover:text-white">
            {name}
          </ItemName>
        </ItemContainer>
      </div>
    </>
  );
};

export default NavItem;
