import tw, { styled } from 'twin.macro';
import { Button, Icon } from '..';
import {
  sectionHalfPaddingB,
  sectionPaddingB,
} from '../../../styles/stylesData';
import { Section } from '../layout';
import { Heading } from '../typography';
import { journalDays } from '../../data';
import JournalCard from './JournalCard';
import { HiOutlineCalendar } from 'react-icons/hi';

const Wrapper = styled.main(() => [
  // sectionHalfPaddingB,
  tw`
    mb-8
  `,
]);

const Circa = styled.div(() => [
  tw`
    flex
    gap-4
    items-center
    justify-center
  `,
]);

const FilterWrapper = styled.aside(() => [
  tw`
  
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

const JournalList = () => {
  // console.log('CHECK--', sortedJournals);
  return (
    <Wrapper>
      <Section variant="top" halfMargin>
        <Circa>
          <Icon>
            <HiOutlineCalendar />
          </Icon>
          <div>
            <Heading variant="monoBold" align="left" noMargin noGutter>
              Coding journey circa
            </Heading>
            <Heading variant="xs" noMargin noGutter>
              22 March 2021
            </Heading>
          </div>
        </Circa>
      </Section>
      <div className="border-t border-primary-dark border-dashed">
        <Section variant="clean">
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
      </div>
    </Wrapper>
  );
};

export default JournalList;
