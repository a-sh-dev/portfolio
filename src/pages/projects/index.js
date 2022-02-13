import { Meta } from '../../components';
import { Container, Header } from '../../components/layout';
import { Heading } from '../../components/typography';
import { ProjectList } from '../../components/projects';

const projects = () => {
  return (
    <>
      <Meta title="projects" />
      <Container>
        <Header sticker="My pressccciiousssh~!" title="Projects" color="purple">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima esse
          optio perferendis ipsa voluptates eos beatae voluptate illum,
          blanditiis assumenda!
        </Header>
        <ProjectList />
      </Container>
    </>
  );
};

export default projects;
