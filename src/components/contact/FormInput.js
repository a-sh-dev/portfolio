import tw, { styled } from 'twin.macro';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const Input = styled.div(() => [
  tw`
  
  `,
]);

const Label = styled.div(() => [
  tw`
  
  `,
]);

const FormInput = ({ onChange, type, name, label, placeholder, ...rest }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormInput;
