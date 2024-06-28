import { FaRegMeh } from 'react-icons/fa';
import tw, { styled } from 'twin.macro';
import { pagesHeroMax, sectionPaddingB } from '../../../styles/stylesData';
import { GridColumn, GridContainer, Header } from '../layout';
import { JournalIcon } from '../svgs';
import { BodyIntro, Em, EmMed, Paragraph, TextIcon } from '../typography';

const Wrapper = styled.div(() => [
  sectionPaddingB,
  pagesHeroMax,
  tw`
  `,
]);

const JournalHeader = () => {
  return (
    <Wrapper>
      <Header
        title="The"
        subline="Perpetual Learning Journal"
        sticker="Journey of learning to learn"
        color="pink"
      >
        <JournalIcon />
      </Header>
      <GridContainer>
        <GridColumn col="span-11">
          <BodyIntro noMargin variant="bold" size="intro">
            Keeping up with technology can be overwhelming.
            <TextIcon>
              <FaRegMeh aria-hidden="true" />
            </TextIcon>
            However, new frameworks, libraries, and even programming languages
            are consistently being developed to improve them, which is meant to
            help developers.
          </BodyIntro>

          <Paragraph>
            I&apos;ve come to understand the importance of having a
            <Em> growth mindset</Em>, which involves embracing challenges and
            viewing mistakes as opportunities for learning. A growth mindset
            acknowledges that mistakes contribute to learning and encourages the
            belief that{' '}
            <EmMed>
              &quot;I will learn from this. I can figure it out.&quot;{' '}
            </EmMed>
            On the other hand, a fixed mindset tends to say, &quot; I&apos;ll
            never be good at this. I give up.&quot;
          </Paragraph>
          <Paragraph>
            Although I often adopt the latter mindset, I&apos;ve gradually
            learned to accept it and understand that it&apos;s alright. I know
            that with time, I will improve my understanding and abilities. My
            mentors have advised,{' '}
            <EmMed>
              &quot;We can&apos;t be experts at everything! Instead, focus on
              enjoying the learning process and have fun!&quot; mentors have
              advised,{' '}
            </EmMed>
          </Paragraph>
          <Paragraph>
            I like to record my learning progress, milestones and reminders for
            self-motivation by marking them in days since I started my coding
            journey. Hopefully, it can also motivate and encourage others not to
            give up.
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default JournalHeader;
