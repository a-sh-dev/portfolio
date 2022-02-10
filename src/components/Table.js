import tw, { styled } from 'twin.macro';
import { Heading, SubHeading } from './typography';

const Wrapper = styled.div(() => [
  tw`
  
  `,
]);

const Header = styled.header(() => [
  tw`
    
  `,
]);

const Table = () => {
  return (
    <Wrapper>
      <Header>
        <Heading variant="xs" noMargin>
          Fullstack capable front-end development
        </Heading>
      </Header>
    </Wrapper>
  );
};

export default Table;
