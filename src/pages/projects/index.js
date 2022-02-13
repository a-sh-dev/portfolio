import { Meta } from '../../components';
import { Container, Header } from '../../components/layout';
import { Heading } from '../../components/typography';
import { ProjectList } from '../../components/projects';

const projects = () => {
  return (
    <>
      <Meta title="projects" />
      <Container>
        <Header
          sticker="My pressccciiousssh~!"
          title="Selected Projects"
          color="purple"
        ></Header>
        <ProjectList />
      </Container>
    </>
  );
};

export default projects;
