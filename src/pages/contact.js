import { Meta } from '../components';
import { Container } from '../components/layout';
import { ContactForm, ContactHeader } from '../components/contact';

const contact = () => {
  return (
    <>
      <Meta title="contact" />
      <Container>
        <ContactHeader />
        <ContactForm />
      </Container>
    </>
  );
};

export default contact;
