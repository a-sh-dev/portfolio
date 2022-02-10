import tw, { styled } from 'twin.macro';
import {
  gridColAlignVariants,
  gridColStartVariants,
  gridColVariants,
} from '../../../styles/stylesData';

const StyledGridColumn = styled.div(({ relative }) => [
  tw`
    col-span-full
  `,
  // targets any non first paragraph
  `
    p + p {
      margin-top: 1.25rem;
    }
  `,
  relative && tw`relative`,
  ({ col = 'span-6' }) => gridColVariants[col],
  ({ start = 'start-1' }) => gridColStartVariants[start],
  ({ align = '' }) => gridColAlignVariants[align],
]);

const GridColumn = ({ col, relative, start, align, children }) => {
  return (
    <StyledGridColumn {...{ relative }} start={start} col={col} align={align}>
      {children}
    </StyledGridColumn>
  );
};

export default GridColumn;
