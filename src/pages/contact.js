import { useState } from 'react';
import { Meta } from '../components';
import { Container } from '../components/layout';
import {
  ContactForm,
  ContactHeader,
  ContactLinks,
} from '../components/contact';

const initialValue = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialValue);

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
        <ContactForm {...{ formData, handleSubmit, handleChange }} />
        <ContactLinks />
      </Container>
    </>
  );
}
