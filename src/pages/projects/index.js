import { Meta } from '../../components';
import { Container, PageTransition } from '../../components/layout';
import {
  ProjectHeader,
  ProjectList,
  ProjectQuote,
} from '../../components/projects';

export default function Projects() {
  return (
    <>
      <Meta title="projects" />
      <PageTransition>
        <Container>
          <ProjectHeader />
          <ProjectList />
          <ProjectQuote />
        </Container>
      </PageTransition>
    </>
  );
}
