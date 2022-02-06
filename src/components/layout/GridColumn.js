import tw, { styled } from 'twin.macro';
import { gridColStartVariants, gridColVariants } from '../../data';

const StyledGridColumn = styled.div(({ relative }) => [
  tw`
    col-span-full
  `,
  relative && tw`relative`,
  ({ col = 'span-6' }) => gridColVariants[col],
  ({ start = 'start-1' }) => gridColStartVariants[start],
]);

const GridColumn = ({ col, relative, start, children }) => {
  return (
    <StyledGridColumn {...{ relative }} start={start} col={col}>
      {children}
    </StyledGridColumn>
  );
};

export default GridColumn;
