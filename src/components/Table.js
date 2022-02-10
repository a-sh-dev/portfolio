import tw, { styled } from 'twin.macro';
import { Heading, SubHeading, TextIcon } from './typography';
import { HiOutlineArrowSmDown } from 'react-icons/hi';

const Wrapper = styled.div(() => [
  tw`
    min-w-min
    mb-6
    bg-red-300/30
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

const SubHeader = styled.div(() => [
  tw`
    pt-4
    pb-2
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

const Table = () => {
  return (
    <Wrapper>
      <Header>
        <Heading variant="xs" noMargin noGutter>
          Fullstack capable frontend development
        </Heading>
      </Header>
      <Content>
        <SubHeader>
          <span className="text-primary-dark">
            <HiOutlineArrowSmDown aria-hidden="true" />
          </span>
          Languages
        </SubHeader>
      </Content>
    </Wrapper>
  );
};

export default Table;
