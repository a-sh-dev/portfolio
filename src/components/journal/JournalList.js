import tw, { styled } from 'twin.macro';
import { Button, Icon } from '..';
import {
  sectionHalfPaddingB,
  sectionPaddingB,
} from '../../../styles/stylesData';
import { Section } from '../layout';
import { Heading } from '../typography';
import { journalDays, tagsLabel, todaysCodingDay } from '../../data';
import JournalCard from './JournalCard';
import { HiOutlineCalendar } from 'react-icons/hi';
import { formatDay } from '../../utils';

const Wrapper = styled.main(() => [
  tw`
    mb-8
  `,
]);

const Circa = styled.div(() => [
  tw`
    flex
    gap-4
    items-start
    justify-center
    md:items-center
  `,
]);

const CircaContent = styled.div(() => [
  tw`
    flex
    flex-col
    gap-4
    ml-2
    md:ml-4
    md:gap-10
    md:flex-row
  `,
]);

const FilterWrapper = styled.aside(() => [
  tw`
    flex
    justify-center
    gap-3
  `,
]);

const JournalGridContainer = styled.div(() => [
  tw`
    grid
    grid-cols-1
    gap-1
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5
  `,
]);

// sort journalData
const sortedJournals = journalDays.sort((a, b) => a.day - b.day);
const momentJournals = sortedJournals.filter(
  (journal) => journal.tag.label === 'moment',
);

const JournalList = () => {
  return (
    <Wrapper>
      <Section variant="top" halfMargin>
        <Circa>
          <Icon>
            <HiOutlineCalendar />
          </Icon>
          <CircaContent>
            <div>
              <Heading variant="monoBold" align="left" noMargin noGutter>
                Journey circa
              </Heading>
              <Heading variant="xs" noMargin noGutter>
                22 March 2021
              </Heading>
            </div>
            <div className="border-primary-dark border-t pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <Heading variant="monoBold" align="left" noMargin noGutter>
                Today marks
              </Heading>
              <Heading variant="monoXs" noMargin noGutter>
                Day#{todaysCodingDay}
              </Heading>
            </div>
          </CircaContent>
        </Circa>
      </Section>
      <div className="border-t border-primary-dark border-dashed">
        <Section variant="clean" halfMargin>
          <FilterWrapper>
            {tagsLabel.map((tag) => {
              return (
                <Button outlined key={tag}>
                  {tag}
                </Button>
              );
            })}
          </FilterWrapper>
        </Section>
      </div>
      <Section variant="clean" halfMargin>
        <JournalGridContainer>
          {sortedJournals.map((journal, index) => {
            let reverse = index % 2 === 0;
            return (
              <JournalCard
                key={journal.day}
                reverse={reverse}
                journal={journal}
              />
            );
          })}
        </JournalGridContainer>
      </Section>
    </Wrapper>
  );
};

export default JournalList;
