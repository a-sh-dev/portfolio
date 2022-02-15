import tw, { styled } from 'twin.macro';
import { Icon } from '..';
import { sectionPaddingB } from '../../../styles/stylesData';
import { Section } from '../layout';
import { Heading } from '../typography';
import JournalCard from './JournalCard';
import { HiOutlineCalendar } from 'react-icons/hi';

const Wrapper = styled.main(() => [
  tw`
  
  `,
]);

const Circa = styled.div(() => [
  tw`
    flex
    gap-4
    items-center
    justify-center
    // bg-red-300/50
  `,
]);

const JournalGridContainer = styled.div(() => [
  tw`
  
  `,
]);

const JournalList = () => {
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
              Day 001
              <span className="em-dash-title" aria-hidden="true">
                -----
              </span>
              22 March 2021
            </Heading>
          </div>
        </Circa>
      </Section>
      <div className="border-t border-primary-dark border-dashed">
        <Section variant="bottom">
          <JournalGridContainer>
            <JournalCard />
          </JournalGridContainer>
        </Section>
      </div>
    </Wrapper>
  );
};

export default JournalList;
