import tw, { styled } from 'twin.macro';
import { BodyIntro, Heading, Tag } from './typography';
import { HiOutlineArrowSmDown } from 'react-icons/hi';

const Wrapper = styled.div(() => [
  tw`
    mb-6
  `,
]);

const Header = styled.header(() => [
  tw`
    border-primary-dark
    border-t
    mt-4
    md:mt-0
    py-4

  `,
]);

const Content = styled.div(() => [
  tw`
    border-primary-dark
    border-t
    border-dashed
  `,
]);

const Table = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>
        <Heading variant="xs" noMargin noGutter>
          {title}
        </Heading>
      </Header>

      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Table;
