import tw, { styled } from 'twin.macro';
import { layoutVariants } from '../../../styles/stylesData';

const Wrapper = tw.article`
  relative
`;

const Layout = styled.div(({ flowCol }) => [
  tw`
    
  `,
  ({ layout = 'grid' }) => layoutVariants[layout],
  flowCol && tw`grid-flow-col`,
]);

const GridContainer = ({ flowCol, layout, children }) => {
  return (
    <Wrapper>
      <Layout layout={layout} {...{ flowCol }}>
        {children}
      </Layout>
    </Wrapper>
  );
};

export default GridContainer;
