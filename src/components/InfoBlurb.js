import tw, { styled } from 'twin.macro';
import { sectionPaddingB } from '../../styles/stylesData';
import { Em } from './typography';
import { FaInfo } from 'react-icons/fa';
import { Icon } from '.';

const Intro = styled.div(({ sectPad }) => [
  sectPad && sectionPaddingB,
  tw`
    text-primary-dark
    text-sm
    flex
    justify-center
    gap-4
    md:items-center
    lg:text-base
    xl:text-lg
  `,
]);

const InfoBlurb = ({ sectPad, blurb, children }) => {
  return (
    <Intro {...{ sectPad }}>
      <Icon size="xs">{children || <FaInfo />}</Icon>
      <Em>{blurb}</Em>
    </Intro>
  );
};

export default InfoBlurb;
