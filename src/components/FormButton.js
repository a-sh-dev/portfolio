import tw, { styled } from 'twin.macro';
import { uniformTransition } from '../../styles/stylesData';
import { BsArrowRight } from 'react-icons/bs';

const outlinedBase = tw`bg-transparent`;
const btnBase = tw`font-mono text-primary-light capitalize cursor-pointer hover:(bg-primary-darkest text-white)`;
const iconBase = tw`grid place-items-center text-lg pt-0.5 md:text-xl`;

const BtnContainer = styled.button(
  ({ outlined, fullWidth, fullWidthSm, disabled }) => [
    btnBase,
    tw`
    flex
    justify-center
    items-center
    border
    border-primary-dark
    rounded-sm
    px-8
    pt-5
    pb-5
    whitespace-nowrap
    bg-primary-dark
    justify-self-start
    self-start
    md:text-lg
    md:pt-5
    md:pb-6
    md:px-16
  `,
    outlined && outlinedBase,
    fullWidth && tw`justify-self-auto self-auto`,
    fullWidthSm &&
      tw`justify-self-auto self-auto lg:justify-self-start lg:self-start`,
    disabled &&
      tw`bg-accent-gray border-accent-gray cursor-not-allowed hover:(bg-accent-gray text-primary-light)`,
    uniformTransition,
  ],
);

const IconWrapper = styled.span(() => [
  iconBase,
  tw`
    pl-5
    md:pl-8
  `,
]);

const FormButton = ({
  outlined,
  fullWidth,
  fullWidthSm,
  disabled,
  children,
}) => {
  return (
    <BtnContainer {...{ outlined, fullWidth, fullWidthSm, disabled }}>
      {children}
      <IconWrapper>
        <BsArrowRight aria-hidden="true" />
      </IconWrapper>
    </BtnContainer>
  );
};

export default FormButton;
