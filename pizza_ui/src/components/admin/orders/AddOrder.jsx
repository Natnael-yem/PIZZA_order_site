import {
    MaterialReactTable,
    useMaterialReactTable,
    createMRTColumnHelper,
} from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import { MdOutlineFileDownload } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { data } from './makeData';
const columnHelper = createMRTColumnHelper();

const columns = [
    columnHelper.accessor('name', {
        header: 'Name',
        size: 40,
    }),
    columnHelper.accessor('topping', {
        header: 'Topping',
        size: 120,
    }),
    columnHelper.accessor('quantity', {
        header: 'Quantity',
        size: 120,
    }),
    columnHelper.accessor('phone', {
        header: 'Customer No',
        size: 300,
    }),
    columnHelper.accessor('created_At', {
        header: 'Created at',
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        size: 220,
    }),
];

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const AddOrder = () => {
    const handleExportRows = (rows) => {
        const rowData = rows.map((row) => row.original);
        const csv = generateCsv(csvConfig)(rowData);
        download(csvConfig)(csv);
    };

    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(data);
        download(csvConfig)(csv);
    };

    const table = useMaterialReactTable({
        columns,
        data,
        enablePagination: false,
        enableSorting: false,
        enableColumnActions: false,
        muiTableHeadCellProps: {
            sx: {
                backgroundColor: '#F6F6F6',
                fontWeight: 'bold',
            },
        },
        muiTableProps: {
            sx: {
                border: '2px solid #F6F6F6',

            },
        },
        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                sx={{
                    display: 'flex ',
                    paddingY: '4px',
                    flexWrap: 'wrap ',

                }}
                className="w-[100%]"
            >
                <div className='flex justify-between w-[100%] items-center'>
                    <p className='text-[#797979] text-[1.2rem] pl-2'>Packages</p>
                    <div className='flex items-center space-x-3'>
                        <GrPowerReset className='text-[#797979] text-[1.3rem]' />
                        <MdOutlineFileDownload onClick={handleExportData} className='text-[#797979] text-[1.6rem]' />
                    </div>
                </div>
            </Box>
        ),
    });
    return (
        <div className='p-2'>
            <div className='bg-white p-12 rounded-lg shadow-lg'>
                <div className='border border-gray-200 rounded-md'>
                    <MaterialReactTable table={table} />
                </div>
            </div>
        </div>
    )
}
export default AddOrder