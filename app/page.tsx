'use client';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';

import Table from '@/components/Table';
import TableHead from '@/components/TableHead';
import TableRow from '@/components/TableRow';
import TableCell from '@/components/TableCell';
import TableBody from '@/components/TableBody';
import TableFoot from '@/components/TableFoot';
import RequestStatus from '@/components/RequestStatus';
import Button from '@/components/Button';

import Loader from '@/components/Loader';

type Request = {
  id: string;
  item: string;
  createdAt: string;
  status: 'draft' | 'pending' | 'complete';
};

const columnHelper = createColumnHelper<Request>();

const defaultData: Request[] = [
  {
    id: '343901',
    item: 'Air Jordan 3 Travis Scott',
    createdAt: '2023-12-06T11:39:24+00:00',
    status: 'draft',
  },
  {
    id: '934030',
    item: 'Air Jordan 3 Travis Scott',
    createdAt: '2023-12-06T11:39:24+00:00',
    status: 'complete',
  },
  {
    id: '934031',
    item: 'Air Jordan 3 Travis Scott',
    createdAt: '2023-12-06T11:39:24+00:00',
    status: 'pending',
  },
  {
    id: '934032',
    item: 'Air Jordan 3 Travis Scott',
    createdAt: '2023-12-06T11:39:24+00:00',
    status: 'draft',
  },
  {
    id: '934033',
    item: 'Air Jordan 3 Travis Scott',
    createdAt: '2023-12-06T11:39:24+00:00',
    status: 'draft',
  },
  {
    id: '934034',
    item: 'Air Jordan 3 Travis Scott',
    createdAt: '2023-12-06T11:39:24+00:00',
    status: 'draft',
  },
  {
    id: '934035',
    item: 'Air Jordan 3 Travis Scott',
    createdAt: '2023-12-06T11:39:24+00:00',
    status: 'draft',
  },
];

const columns = [
  columnHelper.accessor('id', {
    header: 'Request ID',
    cell: (info) => info.getValue(),
    size: 150,
  }),
  columnHelper.accessor((row) => row.status, {
    id: 'status',
    cell: (info) => <RequestStatus variant={info.getValue()} />,
    header: 'Progress',
  }),
  columnHelper.accessor('item', {
    header: 'Item',
    cell: (info) => info.renderValue(),
    size: Number.MAX_SAFE_INTEGER,
  }),
  columnHelper.accessor('createdAt', {
    header: 'Created At',
    cell: (info) =>
      new Date(info.getValue()).toLocaleString('en', {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: '2-digit',
      }),
    size: Number.MAX_SAFE_INTEGER,
  }),
];

function Home() {
  const query = useQuery({
    queryKey: ['requests'],
    queryFn: () => Promise.resolve(defaultData),
  });

  const table = useReactTable({
    data: query.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      minSize: 0,
      size: 150,
      maxSize: Number.MAX_SAFE_INTEGER,
    },
  });

  const firstElementIndex =
    table.getState().pagination.pageSize *
      (table.getState().pagination.pageIndex > 0
        ? table.getState().pagination.pageIndex - 1
        : 0) +
    1;

  const lastElementIndex = Math.min(
    firstElementIndex + table.getState().pagination.pageSize,
    table.getRowModel().rows.length
  );

  return (
    <div className='p-8'>
      {query.isLoading && <Loader />}
      {!query.isLoading && (
        <Table className='w-full table-fixed'>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    component='th'
                    className='max-w-[125px]'
                    key={header.id}
                    style={{
                      width:
                        header.getSize() === Number.MAX_SAFE_INTEGER
                          ? 'auto'
                          : header.getSize(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{
                      width:
                        cell.column.getSize() === Number.MAX_SAFE_INTEGER
                          ? 'auto'
                          : cell.column.getSize(),
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableCell colSpan={4} variant='foot'>
                <div className='flex items-center'>
                  <span>{`Viewing ${firstElementIndex}-${lastElementIndex} of ${
                    table.getRowModel().rows.length
                  } results`}</span>

                  <div className='ml-auto'>
                    <Button className='mr-1' size='xs' disabled>
                      Previous
                    </Button>
                    <Button size='xs'>Next</Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFoot>
        </Table>
      )}
    </div>
  );
}

export default Home;
