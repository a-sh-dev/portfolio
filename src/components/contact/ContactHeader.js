import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer, Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';
import { EnvelopeIcon } from '../svgs';
import { pagesHeroMax, sectionPaddingB } from '../../../styles/stylesData';
import { ImPointDown } from 'react-icons/im';

const Wrapper = styled.div(() => [
  sectionPaddingB,
  pagesHeroMax,
  tw`
    
  `,
]);

const ContactHeader = () => {
  return (
    <Wrapper>
      <Header
        title="Let's Get"
        subline="in Touch!"
        sticker="Chat soon, maybe?"
        color="yellow"
      >
        <EnvelopeIcon />
      </Header>
      <GridContainer>
        <GridColumn col="span-10-8" className="xl:col-span-11">
          <BodyIntro noMargin variant="bold" size="intro">
            I would love to chat with you about anything!
          </BodyIntro>

          <Paragraph>
            While I am fixing the contact form, I can be contacted through
            social media, therefore...
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
