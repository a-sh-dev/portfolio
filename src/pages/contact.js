import { Meta } from '../components';
import { Container } from '../components/layout';
import {
  ContactForm,
  ContactHeader,
  ContactLinks,
} from '../components/contact';

const contact = () => {
  return (
    <>
      <Meta title="contact" />
      <Container>
        <ContactHeader />
        <ContactForm />
        <ContactLinks />
      </Container>
    </>
  );
};

export default contact;
