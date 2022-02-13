import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer } from '.';
import { Sticker } from '..';
import { sectionPaddingB } from '../../../styles/stylesData';
import { Heading } from '../typography';

const Wrapper = styled.header(() => [
  sectionPaddingB,
  tw`
    pt-10
    md:pt-32
    xl:pt-44
  `,
]);

const SubHeader = styled.div(() => [
  tw`

  `,
]);

const Header = ({ title, sticker, color, children }) => {
  return (
    <Wrapper>
      <GridContainer>
        <GridColumn col="span-8">
          <Heading>{title}</Heading>
          {sticker && <Sticker color={color}>{sticker}</Sticker>}
        </GridColumn>
        <GridColumn col="span-4">
          <SubHeader>{children}</SubHeader>
        </GridColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default Header;
