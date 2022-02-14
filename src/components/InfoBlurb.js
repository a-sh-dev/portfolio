import tw, { styled } from 'twin.macro';
import { sectionPaddingB } from '../../styles/stylesData';
import { Em } from './typography';
import { FaInfo } from 'react-icons/fa';
import { Icon } from '.';

const Intro = styled.div(({ sectPad, center }) => [
  sectPad && sectionPaddingB,
  tw`
    text-primary-dark
    text-sm
    flex
    gap-4
    justify-center
    md:items-center
    lg:text-base
    xl:text-lg
  `,
  center && tw`items-center`,
]);

const InfoBlurb = ({ sectPad, blurb, center, children }) => {
  return (
    <Intro {...{ sectPad, center }}>
      <Icon size="xs">{children || <FaInfo />}</Icon>
      <Em>{blurb}</Em>
    </Intro>
  );
};

export default InfoBlurb;
