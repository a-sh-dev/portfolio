import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { Section } from '../layout';
import { FormButton, InfoBlurb } from '..';
import FormInput, { textFieldBase } from './FormInput';
import { contactForInputs } from '../../data';

const Wrapper = styled.div(() => [
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
    lg:flex-row
    xl:px-32
    2xl:w-5/6
    2xl:p-32
  `,
]);

const FormColumn = styled.form(() => [
  tw`
    flex
    flex-col
    gap-4
    flex-1
  `,
]);

const ImgColumn = styled.div(() => [
  tw`
    mt-10
    self-center
    md:flex-shrink-0
    lg:mt-0
  `,
]);

const MessageInput = styled.textarea(() => [
  textFieldBase,
  tw`
  
  `,
]);

const ContactForm = ({
  formData,
  handleSubmit,
  handleChange,
  loading,
  success,
}) => {
  return (
    <Section variant="top" relative>
      <Wrapper>
        <FormColumn onSubmit={handleSubmit} method="post">
          {success ? (
            <div className="mb-4 bg-accent-yellow p-5 pb-6 rounded-sm">
              <InfoBlurb
                blurb="Thank you for your message! I will get back to you as soon as possible."
                center
              />
            </div>
          ) : (
            <div className="mb-4">
              <InfoBlurb blurb="All fields are required." center />
            </div>
          )}
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
            required
          />
          <FormButton type="submit" fullWidthSm disabled={loading}>
            {loading ? 'Sending' : 'Submit'}
          </FormButton>
        </FormColumn>
        <ImgColumn>
          <Image
            src="/images/cuppa_circle.svg"
            alt="let's grab a coffee or tea, maybe?"
            width={300}
            height={300}
          />
        </ImgColumn>
      </Wrapper>
    </Section>
  );
};

export default ContactForm;
