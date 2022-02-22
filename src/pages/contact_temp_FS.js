import { useState, useEffect } from 'react';
import { Meta } from '../components';
import { Container } from '../components/layout';
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
      <Container>
        <ContactHeader />
        <ContactFormFS />
        <ContactLinks />
        <ContactQuote />
      </Container>
    </>
  );
}
