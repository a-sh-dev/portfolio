import tw, { styled } from 'twin.macro';

const Wrapper = styled.span(() => [
  tw`
    font-sans
    text-primary-dark
    uppercase
    py-1.5
    px-3
    border
    border-primary-dark
    rounded-full
    tracking-wide
    text-xs
    font-medium
    mr-1.5
    md:mr-2
    md:text-sm
  `,
]);

const Tag = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Tag;
