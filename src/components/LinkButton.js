import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { uniformTransition } from '../../styles/stylesData';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

const outlinedBase = tw`bg-transparent`;
const btnBase = tw`font-mono text-primary-dark capitalize cursor-pointer hover:(bg-primary-dark text-white)`;
const iconBase = tw`grid place-items-center text-lg pt-0.5 md:text-xl`;

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
    pt-3
    pb-4
    whitespace-nowrap
    md:text-lg
    md:pt-5
    md:pb-6
    md:px-16
    bg-white
  `,
  outlined && outlinedBase,
  uniformTransition,
]);

const IconWrapper = styled.span(() => [
  iconBase,
  tw`
    pl-5
    md:pl-8
  `,
]);

const LinkButton = ({ outlined, url, children }) => {
  return (
    <Link href={url} passHref>
      <BtnContainer {...{ outlined }}>
        {children}
        <IconWrapper>
          <BsArrowRight aria-hidden="true" />
        </IconWrapper>
      </BtnContainer>
    </Link>
  );
};

export default LinkButton;
