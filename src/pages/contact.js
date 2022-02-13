import { Meta } from '../components';
import { Container, Header } from '../components/layout';
import { Heading } from '../components/typography';

const contact = () => {
  return (
    <>
      <Meta title="contact" />
      <Container>
        <Header
          sticker="Email me, maybe?"
          title="Let's Get in Touch"
          color="yellow"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima esse
          optio perferendis ipsa voluptates eos beatae voluptate illum,
          blanditiis assumenda!
        </Header>
      </Container>
    </>
  );
};

export default contact;
