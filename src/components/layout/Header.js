import tw, { styled } from 'twin.macro';
import { GridColumn, GridContainer } from '.';
import { Icon, Sticker } from '..';
import { Heading } from '../typography';

const Wrapper = styled.header(() => [
  tw`
    pt-10
    pb-6
    md:pb-14
    md:pt-32
    xl:pt-44
  `,
]);

const SideHeader = styled.div(() => [
  tw`
    hidden
    md:pt-8
    lg:pt-2
    md:block
    relative
  `,
  `
  `,
]);

const IconWrapper = styled.div(() => [
  tw`
    w-full
  `,
]);

const Header = ({ title, subline, sticker, color, children }) => {
  return (
    <Wrapper>
      <GridContainer layout="grid-xy">
        <GridColumn col="span-8">
          <div className="2xl:pr-24">
            <Heading>
              {title}
              {subline && (
                <>
                  <br /> {subline}
                </>
              )}
            </Heading>
            {sticker && <Sticker color={color}>{sticker}</Sticker>}
          </div>
        </GridColumn>
        <SideHeader>
          <GridColumn col="span-3">
            <IconWrapper>
              <Icon size="lg">{children}</Icon>
            </IconWrapper>
          </GridColumn>
        </SideHeader>
      </GridContainer>
    </Wrapper>
  );
};

export default Header;
