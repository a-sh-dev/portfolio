import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { sectionPaddingB } from '../../../styles/stylesData';
import { Section } from '../layout';
import { FormButton, InfoBlurb } from '..';
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
    md:rounded-xl
    md:p-20
    md:bg-white/30
    md:gap-10
    md:flex-row
    // md:w-4/5
    // xl:w-2/3
  `,
]);

const FormColumn = styled.form(() => [
  tw`
    flex
    flex-col
    gap-4
    flex-1
    md:w-2/3
    xl:w-20
  `,
]);

const ImgColumn = styled.div(() => [
  tw`
    mt-10
    self-center
    md:flex-shrink-0
    md:mt-0
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
    <Section variant="top" relative>
      <Wrapper>
        <FormColumn onSubmit={handleSubmit}>
          <div className="mb-4">
            <InfoBlurb blurb="All fields are required." center />
          </div>
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
            rows="5"
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
