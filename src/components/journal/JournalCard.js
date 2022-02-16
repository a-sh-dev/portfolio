import tw, { styled } from 'twin.macro';
import { Icon, Line } from '..';
import { bgColorVariants } from '../../../styles/stylesData';
import { formatDay } from '../../utils';
import { Paragraph, Tag } from '../typography';

const lineFlex = tw`flex items-center gap-2`;
const dateCategoryBase = tw``;

const Wrapper = styled.article(() => [
  tw`
    p-4
    bg-accent-teal
    rounded-sm
    text-primary-dark
  `,
  ({ color = '' }) => bgColorVariants[color],
]);

const CardHeader = styled.header(() => [
  lineFlex,
  tw`
    
  `,
]);

const Day = styled.p(() => [
  tw`
    font-mono
    text-3xl
  `,
]);

const Date = styled.p(() => [
  tw`
    uppercase
    text-xs
    font-semibold
    tracking-widest
  `,
]);

const Category = styled.p(() => [
  tw`
    font-mono
    text-sm
    font-semibold
    // uppercase
    // tracking-widest
  `,
]);

const CardContent = styled.main(() => [
  tw`
    flex
    flex-col
    space-y-4
    p-4
  `,
]);

const CardFooter = styled.footer(() => [
  lineFlex,
  tw`
    
  `,
]);

const JournalCard = () => {
  return (
    <Wrapper color="teal">
      <CardHeader>
        <Day>047</Day>
        <Line stretch />
        <Category>Initial Commit</Category>
        <div className="w-4">
          <Line />
        </div>
      </CardHeader>

      <CardContent>
        <Tag bg="white">Next.js</Tag>
        <Paragraph>Start of coding journey!</Paragraph>
      </CardContent>

      <CardFooter>
        <Date>21 Mar 21</Date>
        <Line stretch />
        <Icon size="xs">🤩</Icon>
      </CardFooter>
    </Wrapper>
  );
};

export default JournalCard;
