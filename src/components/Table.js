import tw, { styled } from 'twin.macro';
import { BodyIntro, Heading, Tag } from './typography';
import { HiOutlineArrowSmDown } from 'react-icons/hi';

const Wrapper = styled.div(() => [
  tw`
    relative
  `,
]);

const Header = styled.header(() => [
  tw`
    border-primary-dark
    border-t
    mt-4
    py-4
    md:mt-0
    md:pl-2

  `,
]);

const Content = styled.div(({ clean }) => [
  tw`
    border-primary-dark
    border-t
    border-dashed
  `,
  clean && tw`border-t-0`,
]);

const Table = ({ title, clean, children }) => {
  return (
    <Wrapper>
      <Header>
        <Heading variant="xs" noMargin noGutter>
          {title}
        </Heading>
      </Header>

      <Content {...{ clean }}>{children}</Content>
    </Wrapper>
  );
};

export default Table;
