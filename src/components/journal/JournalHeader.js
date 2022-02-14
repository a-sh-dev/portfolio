import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';
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
          <BodyIntro noMargin variant="bold">
            Keeping up with the technology can easily be overwhelming.
            <TextIcon>
              <FaRegMeh aria-hidden="true" />
            </TextIcon>
          </BodyIntro>

          <Paragraph>
            However, new frameworks, libraries and even programming languages
            are consistently being developed for improvement, which is meant to
            help developers. Therefore, I like to record my learning progress
            and milestones for self-motivation that hopefully can also motivate
            and encourage others.
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default JournalHeader;
