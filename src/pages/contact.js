import { Meta } from '../components';
import { Container, PageTransition } from '../components/layout';
import {
  ContactFormFS,
  ContactHeader,
  ContactLinks,
  ContactQuote,
} from '../components/contact';

export default function Contact() {
  return (
    <>
      <Meta title="contact" />
      <PageTransition>
        <Container>
          <ContactHeader />
          <ContactFormFS />
          <ContactLinks />
          <ContactQuote />
        </Container>
      </PageTransition>
    </>
  );
}
