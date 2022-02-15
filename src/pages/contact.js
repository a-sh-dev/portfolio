import React from 'react';
import { Meta } from '../components';
import { Container } from '../components/layout';
import {
  ContactForm,
  ContactHeader,
  ContactLinks,
} from '../components/contact';

const contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMITTED!', formData);
    setFormData(initialValue);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Meta title="contact" />
      <Container>
        <ContactHeader />
        <ContactForm {...{}} />
        <ContactLinks />
      </Container>
    </>
  );
};

export default contact;
