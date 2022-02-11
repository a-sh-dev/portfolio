import tw, { styled } from 'twin.macro';
import { gridRowVariants, layoutVariants } from '../../../styles/stylesData';

const Wrapper = tw.article`
  relative
`;

const Layout = styled.div(({ flowCol, flowRow }) => [
  tw`
  
  `,
  ({ layout = 'grid' }) => layoutVariants[layout],
  ({ row = '' }) => gridRowVariants[row],

  flowCol && tw`grid-flow-col`, // grid-auto-flow: column
  flowRow && tw`grid-flow-row`, // grid-auto-flow: row
]);

const GridContainer = ({ row, flowCol, flowRow, layout, children }) => {
  return (
    <Wrapper>
      <Layout layout={layout} row={row} {...{ flowCol, flowRow }}>
        {children}
      </Layout>
    </Wrapper>
  );
};

export default GridContainer;
