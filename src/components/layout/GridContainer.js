import tw, { styled } from 'twin.macro';
import { gridRowVariants, layoutVariants } from '../../../styles/stylesData';

const Wrapper = tw.article`
  relative
`;

const Layout = styled.div(({ flowCol, flowRow, noGap }) => [
  tw`
    bg-green-200/50
  `,
  ({ layout = 'grid' }) => layoutVariants[layout],
  ({ row = '' }) => gridRowVariants[row],

  flowCol && tw`grid-flow-col`, // grid-auto-flow: column
  flowRow && tw`grid-flow-row`, // grid-auto-flow: row
  noGap && tw`md:gap-0`,
]);

const GridContainer = ({ row, flowCol, flowRow, layout, noGap, children }) => {
  return (
    <Wrapper>
      <Layout layout={layout} row={row} {...{ flowCol, flowRow, noGap }}>
        {children}
      </Layout>
    </Wrapper>
  );
};

export default GridContainer;
