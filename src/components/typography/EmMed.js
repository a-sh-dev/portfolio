import tw, { styled } from 'twin.macro';
import { fontSizeVariants } from '../../../styles/stylesData';

const StyledEm = styled.span(() => [
  tw`
    font-medium
    italic
  `,
  ({ size = '' }) => fontSizeVariants[size],
]);

const EmMed = ({ size, children }) => {
  return <StyledEm size={size}>{children}</StyledEm>;
};

export default EmMed;
