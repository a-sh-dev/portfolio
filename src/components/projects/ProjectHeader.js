import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';
import { FaRegGrinStars } from 'react-icons/fa';
import { HeartIcon } from '../svgs';
import { pagesHeroMax, sectionPaddingB } from '../../../styles/stylesData';

const Wrapper = styled.div(() => [
  sectionPaddingB,
  pagesHeroMax,
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
          <BodyIntro noMargin variant="bold" size="intro">
            Once upon a time, building websites for me only involved integrating
            Adobe Photoshop and{' '}
            <span className="line-through decoration-primary-dark decoration-2">
              (Macromedia)
            </span>{' '}
            Dreamweaver with a few tweaks of HTML and CSS.
          </BodyIntro>

          <Paragraph>
            Fast forward to today; the following are some selected projects, not
            limited to web applications. Each was built from scratch with care
            (and fueled with lots of caffeine). I look forward to adding more
            soon!
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
