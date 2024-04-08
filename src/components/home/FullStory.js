import tw from 'twin.macro';
import Image from 'next/image';
import { Collapsible } from '..';
import { GridColumn, GridContainer } from '../layout';
import { EmMed, Heading, TextIcon, Paragraph, SubHeading } from '../typography';
import { FaRegGrinSquint } from 'react-icons/fa';

const Name = tw.span`
  whitespace-nowrap
  font-bold
`;

const FullStory = () => {
  return (
    <Collapsible color="teal" title="about a-sh.">
      <GridContainer>
        <GridColumn col="span-4">
          <div className="text-center my-4 md:my-0 w-full md:grid">
            <Image
              src="/images/ash_profile_smile.svg"
              alt="a-sh profile illustration"
              width={250}
              height={250}
            />
          </div>
        </GridColumn>
        <GridColumn col="span-8">
          <Heading variant="sm" align="autoL">
            The story of <span className="whitespace-nowrap">a-sh.</span>
          </Heading>
          <SubHeading align="autoL">The journey so far...</SubHeading>
          <Paragraph>
            The name <Name>a-sh </Name> is a personal branding that encapsulates
            the journey of <EmMed>Angie SH</EmMed>. Behind the seemingly simple
            letters lies a tale of growth, passion, and unwavering determination
            that has seamlessly bridged the worlds of design and software
            development.
          </Paragraph>
          <Paragraph>
            While <Name>a-sh </Name> may initially come across as
            <EmMed> a shy human </EmMed>
            due to her petite frame, her warmth and approachability quickly
            shine through, solidifying her reputation as
            <EmMed> a sweet-heart </EmMed>and someone who is excellent to work
            with. As <EmMed>a steadfast helper</EmMed>, her dedication to
            continuous learning and growth makes her invaluable, armed with a
            wealth of experience spanning over a decade in the multidisciplinary
            design realm.
          </Paragraph>
          <Paragraph>
            With a keen eye for branding, illustration, and typography,{' '}
            <Name>a-sh </Name>
            is an<EmMed> artistic savant</EmMed>, often delving into the
            intricacies of typesetting and file management with a touch of
            endearing nerdiness. Her collaborative spirit and openness to
            constructive feedback foster an environment of trust and teamwork,
            making her an invaluable asset to any project she undertakes.
          </Paragraph>
          <Paragraph>
            But <Name>a-sh </Name> is not just a creative designer; she is
            <EmMed> a skillful hybrid</EmMed>, merging her design prowess with a
            newfound passion for software development. With an unwavering
            commitment to crafting sleek, user-friendly, and functional
            solutions through clean coding and effective collaborative
            development, she seamlessly integrates design thinking into the
            development process, ensuring a harmonious fusion of form and
            function.
          </Paragraph>
          <Paragraph>
            In essence, <Name>a-sh </Name> is an
            <EmMed> adept shapeshifter</EmMed>, deftly navigating the realms of
            design and technology, always eager to contribute her multifaceted
            expertise to purpose-driven and meaningful projects that push
            boundaries and inspire innovation.
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Collapsible>
  );
};

export default FullStory;
