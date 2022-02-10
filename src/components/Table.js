import tw, { styled } from 'twin.macro';
import { BodyIntro, Heading, SubHeading, TextIcon } from './typography';
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
          <span className="text-primary-dark text-2xl">
            <HiOutlineArrowSmDown aria-hidden="true" />
          </span>
          <BodyIntro noMargin>Languages</BodyIntro>
        </SubHeader>
      </Content>
    </Wrapper>
  );
};

export default Table;
