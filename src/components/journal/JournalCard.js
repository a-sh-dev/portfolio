import tw, { styled } from 'twin.macro';
import { Icon, Line } from '..';
import { bgColorVariants } from '../../../styles/stylesData';

const Wrapper = styled.article(() => [
  tw`
    p-4
    bg-accent-teal
    rounded-sm
  `,
  ({ color = '' }) => bgColorVariants[color],
]);

const CardHeader = styled.header(() => [
  tw`
    flex
    gap-2
  `,
]);

const Day = styled.p(() => [
  tw`
  
  `,
]);

const CardContent = styled.main(() => [
  tw`
  
  `,
]);

const CardFooter = styled.footer(() => [
  tw`
  
  `,
]);

const JournalCard = () => {
  return (
    <Wrapper>
      <CardHeader>
        <Icon size="xs">🤩</Icon>
        <Line stretch />
        <Day>047</Day>
      </CardHeader>
    </Wrapper>
  );
};

export default JournalCard;
