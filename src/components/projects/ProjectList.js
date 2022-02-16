import tw, { styled } from 'twin.macro';
import { Section } from '../layout';
import ProjectCard from './ProjectCard';
import { InfoBlurb, SloganSticker } from '..';
import { projectsData } from '../../data';

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
      <InfoBlurb
        blurb="Please refer to the project's repository for detailed information."
        sectPad
      />
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
