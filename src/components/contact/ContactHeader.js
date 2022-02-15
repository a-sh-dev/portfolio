import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';
import { EnvelopeIcon } from '../svgs';
import { pagesHeroMax, sectionPaddingB } from '../../../styles/stylesData';
import { FaRegHandPointDown } from 'react-icons/fa';
import { ImPointDown } from 'react-icons/im';

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

const ContactHeader = () => {
  return (
    <Wrapper>
      <Header
        title="Let's Get"
        subline="in Touch!"
        sticker="Email me, maybe?"
        color="yellow"
      >
        <EnvelopeIcon />
      </Header>
      <GridContainer>
        <GridColumn col="span-9">
          <BodyIntro noMargin variant="bold" size="intro">
            I would love to chat with you about anything!
          </BodyIntro>

          <Paragraph>
            But while I am still working on the contact form, I can be contacted
            through social media, therefore...
            <TextIcon>
              <ImPointDown />
            </TextIcon>
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default ContactHeader;
