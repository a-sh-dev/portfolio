import tw, { styled } from 'twin.macro';
import { uniformTransition } from '../../../data';

const ItemContainer = styled.a(() => [
  tw`
    hidden
    bg-white/40
    md:flex
  `,
  uniformTransition,
]);

const ItemGroup = styled.div(() => [
  tw`
    bg-blue-200
    mr-4
    flex
    items-center
    `,
]);

const ItemName = styled.span(() => [
  tw`
    text-lg
    
  `,
]);

const IconWrapper = tw.span`
  grid
  place-items-center
  text-xl
  text-primary-light
  mr-2
  w-10
  h-10
  rounded-full
  bg-primary-dark
`;

const NavItem = ({ link }) => {
  const { id, name, svg, current, url } = link;
  return (
    <>
      <ItemContainer key={id}>
        <ItemGroup>
          <IconWrapper>{svg}</IconWrapper>
          <ItemName>{name}</ItemName>
        </ItemGroup>
      </ItemContainer>
    </>
  );
};

export default NavItem;
