import tw, { styled } from 'twin.macro';
import { Icon } from '.';
import { HiOutlineSparkles } from 'react-icons/hi';
import { Heading, Paragraph, TextIcon } from './typography';

const Wrapper = styled.div(() => [
  tw`
    flex
    flex-col
    relative
    mb-8
    border-b
    border-primary-dark
    md:bg-white/20
    md:h-full
    md:mb-0
    md:p-8
    md:border
    md:border-primary-dark
    md:rounded-md
    xl:p-12
  `,
]);

const Header = styled.header(() => [
  tw`
    flex
    flex-col
    mb-2
    md:mb-4
  `,
]);

const IconWrapper = tw.div`
  relative
  mb-2
  md:-top-10
  md:-mb-6
  xl:-top-16
  xl:-mb-12
`;

const Content = styled.main(() => [
  tw`
    pb-8
    md:pb-0
  `,
]);

const FactCard = ({ fact }) => {
  const { title, desc, icon, id, emoji } = fact;
  return (
    <Wrapper key={id}>
      <Header>
        {icon && (
          <IconWrapper>
            <Icon size="sm">{icon}</Icon>
          </IconWrapper>
        )}

        <Heading variant="card" noGutter>
          {title}
        </Heading>
      </Header>
      <Content>
        <Paragraph>
          {desc}
          <TextIcon color="dark">{emoji}</TextIcon>
        </Paragraph>
      </Content>
    </Wrapper>
  );
};

export default FactCard;
