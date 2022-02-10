import tw, { styled } from 'twin.macro';
import { fontSizeVariants } from '../../../styles/stylesData';

const StyledEm = styled.span(() => [
  tw`
    font-semibold
    italic
  `,
  ({ size = '' }) => fontSizeVariants[size],
]);

const EmSemi = ({ size, children }) => {
  return <StyledEm size={size}>{children}</StyledEm>;
};

export default EmSemi;
