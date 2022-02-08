import tw, { styled } from 'twin.macro';
import { uniformTransition } from '../../styles/stylesData';

const BtnContainer = styled.button(() => [
  tw`
  
  `,
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

const MainButton = ({ label, children }) => {
  return (
    <BtnContainer>
      {label}
      <IconWrapper>{children}</IconWrapper>
    </BtnContainer>
  );
};

export default MainButton;
