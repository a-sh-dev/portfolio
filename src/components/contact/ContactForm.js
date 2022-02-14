import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { pagesHeroMax, sectionPaddingB } from '../../../styles/stylesData';
import { Section } from '../layout';
import { Em } from '../typography';
import { FaInfo } from 'react-icons/fa';
import { FormButton, Icon, LinkButton } from '..';
import FormInput, { textFieldBase } from './FormInput';
import { contactForInputs } from '../../data';

const Wrapper = styled.div(() => [
  sectionPaddingB,
  tw`
    flex
    flex-col
    w-full
    mx-auto
    mt-4
    md:gap-10
    md:flex-row
    md:w-4/5
  `,
]);

const FormColumn = styled.form(() => [
  tw`
    flex
    flex-col
    gap-6
    flex-1
    md:w-2/3
  `,
]);

const ImgColumn = styled.div(() => [
  tw`
    mt-10
    md:mt-0
    mx-auto
  `,
]);

const MessageInput = styled.textarea(() => [
  textFieldBase,
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
          {contactForInputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                value={formData[input.name]}
                onChange={handleChange}
                {...input}
              />
            );
          })}
          <MessageInput
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
          />
          <FormButton>Send Message</FormButton>
        </FormColumn>
        <ImgColumn>
          <Image
            src="/images/cuppa_circle.svg"
            alt="a cup of tea illustration"
            width={300}
            height={300}
          />
        </ImgColumn>
      </Wrapper>
    </Section>
  );
};

export default ContactForm;
