import tw, { styled } from 'twin.macro';
import { Icon, Line } from '..';
import { bgColorVariants, noteVariants } from '../../../styles/stylesData';
import { formatDay } from '../../utils';
import { Tag, TextIcon } from '../typography';

const lineFlex = tw`flex items-center gap-2`;
const toggleReverse = tw`flex-row-reverse md:flex-row`;

const Wrapper = styled.article(() => [
  tw`
    relative
    py-5
    px-6
    bg-accent-teal
    rounded-md
    text-primary-dark
    flex
    flex-col
    justify-between
  `,
  ({ color = '' }) => bgColorVariants[color],
]);

const CardHeader = styled.header(({ reverse }) => [
  lineFlex,
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
    capitalize
  `,
]);

const CardContent = styled.main(() => [
  tw`
    space-y-4
    p-4
    // self-center
  `,
]);

const Note = styled.p(() => [
  tw`

  `,
  ({ variant = '' }) => noteVariants[variant],
]);

const CardFooter = styled.footer(({ reverse }) => [
  lineFlex,
  tw`
  `,
  reverse && toggleReverse,
]);

const JournalCard = ({ journal, reverse }) => {
  // const { date, day, tag, emoji, code, note } = journal;
  const isQuote = journal?.tag.note === 'quote';

  return (
    <Wrapper color={journal?.tag?.color}>
      <CardHeader {...{ reverse }}>
        <Day>{formatDay(journal?.day)}</Day>
        <Line stretch />
        <Category>{journal?.tag?.label}</Category>
        <div className="w-3">
          <Line />
        </div>
      </CardHeader>

      <CardContent>
        {journal?.tag?.note === 'code' ? (
          <>
            <span className="py-2">
              <Tag bg="white">{journal.code}</Tag>
            </span>
            <p>{journal.note}</p>
          </>
        ) : (
          <>
            <Note variant={journal?.tag?.note}>{journal?.note}</Note>
            {isQuote && (
              <div className="flex items-center gap-x-0.5">
                <span className="w-4">
                  <Line />
                </span>
                <p className="text-xs font-medium capitalize tracking-wide">
                  {journal?.sub}
                </p>
              </div>
            )}
          </>
        )}
      </CardContent>

      <CardFooter {...{ reverse }}>
        <Date>{journal?.date}</Date>
        <Line stretch />
        <Icon size="xs" emoji>
          {journal?.emoji}
        </Icon>
      </CardFooter>
    </Wrapper>
  );
};

export default JournalCard;
