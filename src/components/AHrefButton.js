import tw, { styled } from 'twin.macro';
import { uniformTransition } from '../../styles/stylesData';

const btnBase = tw`font-mono text-primary-dark capitalize cursor-pointer hover:(bg-primary-dark text-white)`;

const BtnContainer = styled.a(({ outlined }) => [
  btnBase,
  tw`
    flex
    justify-center
    items-center
    border
    border-primary-dark
    rounded-sm
    px-6
    pt-2
    pb-3
    whitespace-nowrap
    md:text-lg
    md:pt-3
    md:pb-4
    md:px-12
    bg-white
  `,
  outlined && tw`bg-transparent hover:(bg-white text-primary-darkest)`,
  uniformTransition,
]);

const AHrefButton = ({ outlined, href, children }) => {
  return (
    <BtnContainer
      {...{ outlined }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </BtnContainer>
  );
};

export default AHrefButton;
