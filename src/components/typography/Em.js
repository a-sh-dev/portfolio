import tw, { styled } from 'twin.macro';
import { fontSizeVariants } from '../../../styles/stylesData';

const StyledEm = styled.span(() => [
  tw`
    font-mono
    italic
  `,
  ({ size = '' }) => fontSizeVariants[size],
]);

const Em = ({ size, children }) => {
  return <StyledEm size={size}>{children}</StyledEm>;
};

export default Em;
