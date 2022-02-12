import tw, { styled } from 'twin.macro';
import { uniformTransition } from '../../styles/stylesData';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';

const outlinedBase = tw`bg-transparent`;
const btnBase = tw`font-mono text-primary-dark capitalize cursor-pointer hover:(bg-primary-dark text-white)`;
const iconBase = tw`grid place-items-center text-lg`;

const BtnContainer = styled.button(({ outlined }) => [
  btnBase,
  tw`
    flex
    justify-center
    items-center
    border
    border-primary-dark
    rounded-sm
    px-8
    py-3
    whitespace-nowrap
    bg-white
  `,
  outlined && outlinedBase,
  uniformTransition,
]);

const IconWrapper = styled.span(() => [
  iconBase,
  tw`
    pl-2
  `,
]);

const LinkButton = ({ large, outlined, label, onClick, children }) => {
  return (
    <BtnContainer {...{ outlined, large }} onClick={onClick}>
      {label}
      <IconWrapper>{children || <HiArrowNarrowRight />}</IconWrapper>
    </BtnContainer>
  );
};

// const NavLogo = React.forwardRef(({ onClick, href }, ref) => {
//   return (
//     <a href={href} onClick={onClick} ref={ref}>
//       <AshLogo />
//     </a>
//   );
// });

// NavLogo.displayName = 'NavLogo';

export default LinkButton;
