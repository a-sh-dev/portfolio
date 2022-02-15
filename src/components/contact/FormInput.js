import tw, { styled } from 'twin.macro';

export const textFieldBase = tw`bg-white text-primary-dark border border-primary-dark text-base md:text-lg px-6 py-3 rounded-sm placeholder:text-primary-dark placeholder:font-bold focus:outline-none focus:ring-4 focus:ring-primary-dark`;

const InputWrapper = tw.div`
  flex
  flex-col
  gap-1
`;

const Input = styled.input(() => [
  textFieldBase,
  tw`
  `,
]);

const FormInput = ({
  onChange,
  type,
  name,
  label,
  errorMessage,
  placeholder,
  ...rest
}) => {
  return (
    <InputWrapper>
      <Input
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </InputWrapper>
  );
};

export default FormInput;
