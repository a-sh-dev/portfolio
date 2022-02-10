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

const TableRow = styled.div(() => [
  tw`
    pt-4
    pb-4
    flex
    items-center
    gap-1.5
  `,
]);

const Content = styled.div(() => [
  tw`
    border-primary-dark
    border-t
    border-dashed
  `,
]);

const Table = ({ title, subTitle, children }) => {
  return (
    <Wrapper>
      <Header>
        <Heading variant="xs" noMargin noGutter>
          {title}
        </Heading>
      </Header>

      <Content>
        <TableRow>
          <span className="text-primary-dark text-2xl">
            <HiOutlineArrowSmDown aria-hidden="true" />
          </span>
          <BodyIntro noMargin>Languages</BodyIntro>
        </TableRow>

        <div className="flex flex-wrap">
          <Tag>HTML5</Tag>
          <Tag>CSS3</Tag>
          <Tag>Saas</Tag>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Table;
