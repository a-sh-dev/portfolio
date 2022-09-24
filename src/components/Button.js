import tw, { styled } from 'twin.macro';
import { uniformTransition, bgColorVariants } from '../../styles/stylesData';

const outlinedBase = tw`bg-transparent`;
const btnBase = tw`p-2 font-mono text-primary-dark capitalize text-sm cursor-pointer hover:(bg-primary-dark text-white)`;
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
    px-5
    whitespace-nowrap
  `,
  ({ bgColor = 'white' }) => bgColorVariants[bgColor],
  outlined && outlinedBase,
  uniformTransition,
]);

// Only for icon buttons - without labels
const BtnIcon = styled.button(({ outlined }) => [
  btnBase,
  iconBase,
  tw`
    bg-white
    border
    border-primary-dark
    rounded-full
    flex-shrink-0
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

const Button = ({ icon, outlined, label, onClick, children, bgColor }) => {
  return icon ? (
    <BtnIcon {...{ outlined }} className="h-fit" onClick={onClick}>
      <div className="h-fit aspect-square">{children}</div>
    </BtnIcon>
  ) : (
    <BtnContainer {...{ outlined }} onClick={onClick} bgColor={bgColor}>
      {label}
      {children && <IconWrapper>{children}</IconWrapper>}
    </BtnContainer>
  );
};

export default Button;
