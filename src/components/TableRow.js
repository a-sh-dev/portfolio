import tw, { styled } from 'twin.macro';
import { BodyIntro } from './typography';
import { HiOutlineArrowSmDown } from 'react-icons/hi';

const Wrapper = styled.div(() => [
  tw`
    pb-10
    md:pb-16
  `,
]);

const TableRowHeader = styled.div(() => [
  tw`
    flex
    items-center
    gap-1.5
    py-4
    border-primary-dark
    border-t
    border-dashed
  `,
]);

const Content = styled.div(() => [
  tw`
    flex
    flex-wrap
    gap-2
    md:px-2
  `,
]);

const TableRow = ({ subtitle, children }) => {
  return (
    <Wrapper>
      <TableRowHeader>
        <span className="self-start pt-1 md:pt-1.5 xl:pt-2">
          <div className="text-primary-dark text-xl xl:text-2xl">
            <HiOutlineArrowSmDown aria-hidden="true" />
          </div>
        </span>
        <span className="capitalize">
          <BodyIntro noMargin>{subtitle}</BodyIntro>
        </span>
      </TableRowHeader>

      <Content>{children}</Content>
    </Wrapper>
  );
};

export default TableRow;
