import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Header } from '../layout';
import { BodyIntro, Em, EmMed, Paragraph, TextIcon } from '../typography';
import { FaRegMeh } from 'react-icons/fa';
import { pagesHeroMax, sectionPaddingB } from '../../../styles/stylesData';
import { JournalIcon } from '../svgs';

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
            The most crucial lesson from the boot camp is to have a growth
            mindset as we<Em> learn to learn</Em> instead of a fixed mindset. A
            growth mindset says,{' '}
            <EmMed>
              &quot;Mistakes help me learn. I will know how to do this.&quot;{' '}
            </EmMed>{' '}
            On the contrary, a fixed mindset says, &quot;I will never be smart;
            I am not good at this; I give up!&quot;.
          </Paragraph>
          <Paragraph>
            I often fall into the latter mindset, but over time although I may
            not have <Em>fully</Em> grasped what I have been learning,
            <span className="em-dash">-----</span>I have learned to accept it
            and know that it is OK. Eventually, I will grow in my understanding
            and get better. Many of my seniors have counselled, &quot;Honestly,
            we can&apos;t be experts at EVERYthing! But make sure to enjoy the
            learning and have fun!&quot;.
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
