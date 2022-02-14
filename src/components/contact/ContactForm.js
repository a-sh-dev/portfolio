import tw, { styled } from 'twin.macro';
import { sectionPaddingB } from '../../../styles/stylesData';
import { Section } from '../layout';
import { Em } from '../typography';
import { FaInfo } from 'react-icons/fa';
import { Icon } from '..';

const Intro = styled.div(() => [
  sectionPaddingB,
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

const ContactForm = () => {
  return (
    <Section variant="top" noBottomMargin relative>
      <Intro>
        <Icon size="xs">
          <FaInfo />
        </Icon>
        <Em>
          Please refer to the project&apos;s repository for detailed
          information.
        </Em>
      </Intro>
    </Section>
  );
};

export default ContactForm;
