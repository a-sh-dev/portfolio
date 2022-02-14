import tw, { styled } from 'twin.macro';
import { sectionPaddingB } from '../../../styles/stylesData';
import { Section } from '../layout';
import { Em } from '../typography';
import ProjectCard from './ProjectCard';
import { FaInfo } from 'react-icons/fa';
import { Icon, SloganSticker } from '..';
import { projectsData } from '../../data';

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

const SloganWrapper = tw.div`
  hidden
  md:absolute
  md:flex
  md:justify-center
  md:inset-x-0
  md:-top-10
  xl:-top-12
`;

const ProjectList = () => {
  return (
    <Section variant="top" noBottomMargin relative>
      <SloganWrapper>
        <SloganWrapper>
          <SloganSticker withLogo sm lg color="purple" />
        </SloganWrapper>
      </SloganWrapper>
      <Intro>
        <Icon size="xs">
          <FaInfo />
        </Icon>
        <Em>
          Please refer to the project&apos;s repository for detailed
          information.
        </Em>
      </Intro>
      <main className="last:mb-10 mb:last:mb-14 xl:last:mb-20 2xl:last:mb-24">
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
