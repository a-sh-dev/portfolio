import tw, { styled } from 'twin.macro';
import { sectionPaddingB } from '../../../styles/stylesData';
import { Section } from '../layout';
import { Em, SubHeading, TextIcon } from '../typography';
import ProjectCard from './ProjectCard';
import { FaInfo } from 'react-icons/fa';
import { Icon } from '..';

const Intro = styled.div(() => [
  sectionPaddingB,
  tw`
    text-primary-dark
    text-sm

    flex
    md:items-center
    justify-center
    gap-4

    lg:text-base
  `,
]);

const ProjectList = () => {
  return (
    <Section variant="top">
      <Intro>
        <Icon size="xs">
          <FaInfo />
        </Icon>
        <Em>
          Please refer to the project&apos;s repository for detailed
          information.
        </Em>
      </Intro>
      <ProjectCard />
    </Section>
  );
};

export default ProjectList;
