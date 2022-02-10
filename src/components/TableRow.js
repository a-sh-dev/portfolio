import tw, { styled } from 'twin.macro';
import { BodyIntro } from './typography';
import { HiOutlineArrowSmDown } from 'react-icons/hi';

const TableRowHeader = styled.div(() => [
  tw`
    pt-4
    pb-4
    flex
    items-center
    gap-1.5
  `,
]);

const Content = styled.div(() => [
  tw`
    
  `,
]);

const TableRow = ({ subtitle, children }) => {
  return (
    <>
      <TableRowHeader>
        <span className="text-primary-dark text-2xl">
          <HiOutlineArrowSmDown aria-hidden="true" />
        </span>
        <span className="capitalize">
          <BodyIntro noMargin>{subtitle}</BodyIntro>
        </span>
      </TableRowHeader>

      <Content>{children}</Content>
    </>
  );
};

export default TableRow;
