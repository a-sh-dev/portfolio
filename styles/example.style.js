import tw, { styled } from 'twin.macro';

const hoverStyles = css`
  &:hover {
    border-color: black;
    ${tw`text-indigo-400`}
  }
`;

const Input = ({ hasHover }) => (
  <input css={[tw`border`, hasHover && hoverStyles]} />
);

// testing TW sc
const TWStyledButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  py-2
  px-4
  border
  border-black
  rounded
  font-mono
  italic
`;

// testing styled-components
const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid black;
`;

// testing conditional button
const ComboBtn = styled.button(({ isRed }) => [
  isRed
    ? tw`bg-red-400 hover:bg-red-900`
    : tw`bg-indigo-600 hover:bg-indigo-500`,
  tw`
    text-white
    font-extrabold
    font-sans
    py-2
    px-6
    border
    border-black
    rounded-full
  `,
]);
