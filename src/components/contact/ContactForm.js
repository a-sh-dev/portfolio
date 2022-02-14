import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { sectionPaddingB } from '../../../styles/stylesData';
import { Section } from '../layout';
import { Em } from '../typography';
import { FaInfo } from 'react-icons/fa';
import { Icon } from '..';
import FormInput from './FormInput';

const Wrapper = styled.div(() => [
  sectionPaddingB,
  tw`
    
  `,
]);

const FormColumn = styled.form(() => [
  tw`
  
  `,
]);

const ImgColumn = styled.div(() => [
  tw`
  
  `,
]);

const initialData = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section variant="top" noBottomMargin relative>
      <Wrapper>
        <FormColumn onSubmit={handleSubmit}>
          <FormInput onChange={handleChange} />
          <FormInput onChange={handleChange} />
        </FormColumn>
        <ImgColumn>
          <Image
            src="/images/cuppa_circle.svg"
            alt="a cup of tea illustration"
            width={250}
            height={250}
          />
        </ImgColumn>
      </Wrapper>
    </Section>
  );
};

export default ContactForm;
