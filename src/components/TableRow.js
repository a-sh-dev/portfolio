import tw, { styled } from 'twin.macro';
import { BodyIntro } from './typography';
import { HiOutlineArrowSmDown } from 'react-icons/hi';

const Wrapper = styled.div(({ noGutter, dense }) => [
  tw`
    pb-10
    md:pb-16
  `,
  noGutter && tw`pb-0 md:pb-0`,
  dense && tw`pb-6 md:pb-12`,
]);

const dashedLine = `py-4 border-primary-dark border-t border-dashed`;

const TableRowHeader = styled.div(({ noDashed }) => [
  tw`
    flex
    items-center
    gap-1.5
    ${dashedLine}
  `,
  noDashed && tw`border-t-0`,
]);

const Content = styled.div(({ noSub }) => [
  tw`
    flex
    flex-wrap
    gap-2
    md:px-2
  `,
  noSub && tw`${dashedLine} pt-6`,
]);

const TableRow = ({ noSub, subtitle, noGutter, noDashed, dense, children }) => {
  return (
    <Wrapper {...{ noGutter, dense }}>
      {!noSub && (
        <TableRowHeader {...{ noDashed }}>
          <span className="self-start pt-1 md:pt-1.5 xl:pt-2">
            <div className="text-primary-dark text-xl xl:text-2xl">
              <HiOutlineArrowSmDown aria-hidden="true" />
            </div>
          </span>
          <span className="capitalize">
            <BodyIntro noMargin>{subtitle}</BodyIntro>
          </span>
        </TableRowHeader>
      )}

      <Content {...{ noSub }}>{children}</Content>
    </Wrapper>
  );
};

export default TableRow;
