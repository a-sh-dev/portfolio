import tw, { styled } from 'twin.macro';

export const textFieldBase = tw`bg-white text-primary-dark border border-primary-dark text-base md:text-lg px-6 py-3 rounded-sm placeholder:text-primary-dark font-bold`;

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
    <Input
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default FormInput;
