import tw, { styled } from 'twin.macro';
import { sectionPaddingB } from '../../../styles/stylesData';
import { Section } from '../layout';
import { Em } from '../typography';
import ProjectCard from './ProjectCard';
import { FaInfo } from 'react-icons/fa';
import { Icon } from '..';
import { projectsData } from '../../data';

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
      <main>
        {projectsData.map((project, index) => {
          let reverse = index % 2 === 0;
          return (
            <ProjectCard key={project.id} project={project} reverse={reverse} />
          );
        })}
      </main>
    </Section>
  );
};

export default ProjectList;
