import { Meta } from '../../components';
import { Container } from '../../components/layout';
import {
  ProjectHeader,
  ProjectList,
  ProjectQuote,
} from '../../components/projects';

export default function Projects() {
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
}
