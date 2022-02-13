import { Meta } from '../components';
import { Container, Header } from '../components/layout';
import { Heading } from '../components/typography';

const journal = () => {
  return (
    <>
      <Meta title="journal" />
      <Container>
        <Header
          sticker="The journey so far..."
          title="The Journey of Perpetual Learning"
          color="pink"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima esse
          optio perferendis ipsa voluptates eos beatae voluptate illum,
          blanditiis assumenda!
        </Header>
      </Container>
    </>
  );
};

export default journal;
