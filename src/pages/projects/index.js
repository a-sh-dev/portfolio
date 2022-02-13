import { Meta } from '../../components';
import { Container } from '../../components/layout';
import {
  ProjectHeader,
  ProjectList,
  ProjectQuote,
} from '../../components/projects';

const projects = () => {
  return (
    <>
      <Meta title="projects" />
      <Container>
        <ProjectHeader />
        <ProjectList />
        <ProjectQuote />
      </Container>
    </>
  );
};

export default projects;
