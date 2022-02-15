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
        sticker="Learning to learn journey"
        color="pink"
      >
        <JournalIcon />
      </Header>
      <GridContainer>
        <GridColumn col="span-11">
          <BodyIntro noMargin variant="bold" size="intro">
            Keeping up with the technology can easily be overwhelming.
            <TextIcon>
              <FaRegMeh aria-hidden="true" />
            </TextIcon>
            However, new frameworks, libraries and even programming languages
            are consistently being developed for improvement, which is meant to
            help developers.
          </BodyIntro>

          <Paragraph>
            The most crucial lesson from the boot camp is to have a growth
            mindset as we
            <Em> &apos;learn to learn&apos;</Em> instead of a fixed mindset. A
            growth mindset says,{' '}
            <EmMed>
              &quot;Mistakes help me learn. I will know how to do this.&quot;{' '}
            </EmMed>{' '}
            On the contrary, a fixed mindset says, &quot;I will never be smart;
            I am not good at this; I give up!&quot;.
          </Paragraph>
          <Paragraph>
            I may not have <Em>fully</Em> grasped what I have been learning so
            far <span className="em-dash">---</span> and that is ok. But, I will
            eventually grow in my understanding and get better. Honestly, we may
            not be able to be experts at EVERYthing! Therefore, I like to record
            my learning progress and milestones for self-motivation that
            hopefully can also motivate and encourage others.
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default JournalHeader;
