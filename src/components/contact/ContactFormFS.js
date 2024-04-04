import tw, { styled } from 'twin.macro';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Section } from '../layout';
import { FormButton, InfoBlurb } from '..';
import FormInput, { textFieldBase } from './FormInput';
import { contactFormInputsFS } from '../../data';
import { uniformTransition } from '../../../styles/stylesData';

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

const Alert = styled.div(() => [
  tw`
    mb-4
    p-5
    pb-6
    rounded-sm
    bg-accent-yellow
  `,
  uniformTransition,
]);

const initialValue = {
  name: '',
  email: '',
  message: '',
};

const FS_FORM_ENDPOINT = 'https://formspree.io/f/mnqwdwjl';

// ContactForm for FormSpree version
const ContactFormFS = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [formData, setFormData] = useState(initialValue);
  const [alert, setAlert] = useState(false);

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setFormData(initialValue);
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: FS_FORM_ENDPOINT,
      data: formData,
    })
      .then((response) => {
        handleServerResponse(
          true,
          `Thank you for your message. I will get back to you asap!`,
        );
        setAlert(true);
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  // for form submission success alert
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => {
        setAlert(false);
      }, 4500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alert]);

  return (
    <Section variant="top" relative>
      <Wrapper>
        <FormColumn onSubmit={handleOnSubmit}>
          {!status.info.error && status.info.msg && alert ? (
            <Alert>
              <InfoBlurb blurb={status.info.msg} center />
            </Alert>
          ) : (
            <div className="mb-4">
              <InfoBlurb blurb="All fields are required." center />
            </div>
          )}
          {contactFormInputsFS.map((input) => {
            return (
              <FormInput
                key={input.id}
                id={input.id}
                value={formData[input.id]}
                name={input.name}
                onChange={handleOnChange}
                placeholder={input.placeholder}
                type={input.type}
                required
              />
            );
          })}
          <MessageInput
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleOnChange}
            value={formData.message}
            rows="5"
            required
          />
          <FormButton type="submit" fullWidthSm disabled={status.submitting}>
            {!status.submitting ? 'Submit' : 'Sending...'}
          </FormButton>
          {status.info.error && (
            <div className="text-sm text-red-500">Oopps! {status.info.msg}</div>
          )}
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

export default ContactFormFS;
