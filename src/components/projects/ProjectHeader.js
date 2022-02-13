import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Header } from '../layout';
import { BodyIntro, Em, Paragraph, TextIcon } from '../typography';
import { FaRegGrinStars } from 'react-icons/fa';
import { HeartIcon } from '../svgs';
import { pagesHeroMax, sectionPaddingB } from '../../../styles/stylesData';

const Wrapper = styled.div(() => [
  sectionPaddingB,
  pagesHeroMax,
  tw`
    
  `,
]);

const SubHeader = styled.div(() => [
  tw`
  
  `,
]);

const ProjectHeader = () => {
  return (
    <Wrapper>
      <Header
        title="Selected"
        subline="Projects"
        sticker="My prreciiouusss~!"
        color="purple"
      >
        <HeartIcon />
      </Header>
      <GridContainer>
        <GridColumn col="span-9">
          <BodyIntro noMargin>
            Once upon a time, building websites for me involved integrating
            Adobe Photoshop and Dreamweaver...
          </BodyIntro>

          <Paragraph>
            Fast forward, here are some selected projects built from scratch
            with care and heaps of caffeine since I started my formal coding
            journey.
            <TextIcon>
              <FaRegGrinStars aria-hidden="true" />
            </TextIcon>
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default ProjectHeader;
