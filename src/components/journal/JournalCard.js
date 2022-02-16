import tw, { styled } from 'twin.macro';
import { Icon, Line } from '..';
import { bgColorVariants } from '../../../styles/stylesData';
import svgEmoji from '../../utils/emoji';
import { formatDay } from '../../utils';
import { Tag } from '../typography';

const lineFlex = tw`flex items-center gap-2`;
const toggleReverse = tw`flex-row-reverse md:flex-row`;

const Wrapper = styled.article(() => [
  tw`
    py-4
    px-5
    bg-accent-teal
    rounded-md
    text-primary-dark
  `,
  ({ color = '' }) => bgColorVariants[color],
]);

const CardHeader = styled.header(({ reverse }) => [
  lineFlex,
  tw`
    
  `,
  reverse && toggleReverse,
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

const Note = tw.p`
  text-base
  
`;

const CardFooter = styled.footer(({ reverse }) => [
  lineFlex,
  tw`
    
  `,
  reverse && toggleReverse,
]);

const JournalCard = ({ reverse }) => {
  return (
    <Wrapper color="teal">
      <CardHeader {...{ reverse }}>
        <Day>047</Day>
        <Line stretch />
        <Category>Initial Commit</Category>
        <div className="w-3">
          <Line />
        </div>
      </CardHeader>

      <CardContent>
        <span className="pt-2">
          <Tag bg="white50">twin.macro</Tag>
        </span>
        <Note>
          Blends the magic of Tailwind CSS with the flexibility of CSS-in-JS.
        </Note>
      </CardContent>

      <CardFooter {...{ reverse }}>
        <Date>21.03.21</Date>
        <Line stretch />
        <Icon size="xs" emoji>
          {svgEmoji('🤩')}
        </Icon>
      </CardFooter>
    </Wrapper>
  );
};

export default JournalCard;
