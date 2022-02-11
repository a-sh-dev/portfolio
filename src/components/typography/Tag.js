import tw, { styled } from 'twin.macro';

const Wrapper = styled.span(({ withMargin }) => [
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
    whitespace-nowrap
    break-normal
    md:text-sm
  `,
  withMargin && tw`mr-1.5 md:mr-2`,
]);

const Tag = ({ withMargin, children }) => {
  return <Wrapper {...{ withMargin }}>{children}</Wrapper>;
};

export default Tag;
