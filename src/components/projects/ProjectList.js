import tw, { styled } from 'twin.macro';
import { Section } from '../layout';
import Project from './Project';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const ProjectList = () => {
  return (
    <Section>
      <Project>EACH PROJECT</Project>
    </Section>
  );
};

export default ProjectList;
