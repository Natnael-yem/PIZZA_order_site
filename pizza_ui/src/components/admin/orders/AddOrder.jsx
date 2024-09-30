import {
    MaterialReactTable,
    useMaterialReactTable,
    createMRTColumnHelper,
} from 'material-react-table';
import { GoCheck } from "react-icons/go";
import { Box, FormControl, IconButton, MenuItem, Radio, Select } from '@mui/material';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import { MdOutlineFileDownload } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { BsEyeFill } from "react-icons/bs";
import { data } from './makeData';
import { useState } from 'react';
import { useMenu } from '../../../services/useMenu';
import { useUsers } from '../../../services/useUsers';

const columnHelper = createMRTColumnHelper();

const AddOrder = () => {
    const {isLoading, menu} =  useMenu();
    console.log(menu)
    const {user} =  useUsers();
    console.log(user)
    const [showStatus, setShowStatus] = useState(false);
    const [statusMap, setStatusMap] = useState({});
    const allStatuses = ['Preparing', 'Ready', 'Delivered'];
    const handleToppingIconClick = (row) => {
        console.log('Topping icon clicked for', row);
    };

    const handleStatusIconClick = (row) => {
        console.log('Status icon clicked for', row);
    };
    const handleShow = (index) => {
        setShowStatus(!showStatus);
    }
    const handleChange = (row, newStatus) => {
        setStatusMap((prevStatusMap) => ({
            ...prevStatusMap,
            [row.id]: newStatus,
        }));
    };

    const columns = [
        columnHelper.accessor('name', {
            header: 'Name',
            size: 90,
        }),
        columnHelper.accessor('topping', {
            header: 'Topping',
            size: 170,
            Cell: ({ row }) => (
                <Box display="flex" alignItems="center">
                    <IconButton
                        size="small"
                        sx={{ marginLeft: '8px' }}
                        onClick={() => handleToppingIconClick(row.original)}
                    >
                        < BsEyeFill className='text-[#FF8000]' />
                    </IconButton>
                    {/* {row.original.topping} */}
                    <p className='text-[#FF8000]'>Toppings</p>
                </Box>
            ),
        }),
        columnHelper.accessor('quantity', {
            header: 'Quantity',
            size: 120,
        }),
        columnHelper.accessor('phone', {
            header: 'Customer No',
            size: 120,
        }),
        columnHelper.accessor('created_At', {
            header: 'Created at',
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            size: 220,
            Cell: ({ row }) => {
                const currentStatus = statusMap[row.id] || row.original.status;
                const remainingStatuses = allStatuses.filter(status => status !== currentStatus);
                return (
                <Box className={`${currentStatus == 'Ready' ? 'bg-[#008000]' : currentStatus == 'Preparing' && 'bg-[#FFA500]'} w-[70%] rounded-md `}>
                    {currentStatus == 'Delivered' ?
                        <div className='flex space-x-4'>
                            < GoCheck className='text-[#008000] text-[1.4rem] items-center' />
                            <p className='text-[#008000] font-semibold'>{currentStatus}</p>
                        </div>
                        :
                        <FormControl variant="standard" sx={{ minWidth: 130, color: 'white' }}>
                            <Select
                                value={currentStatus}
                                defaultValue={currentStatus}
                                onChange={(e) => handleChange(row, e.target.value)}
                                className=' w-[100%] text-white pl-5 py-1'
                                sx={{ color: 'white ' }}>
                                <MenuItem value={currentStatus} className={`${currentStatus == 'ready' && 'bg-[#008000]'}`}>
                                    {currentStatus}
                                </MenuItem>
                                {remainingStatuses.map((status, index) => (
                                    <MenuItem key={index} value={status}>
                                        <div className='flex items-center justify-between w-[100%]'>
                                            <p>{status}</p>
                                            <Radio className='' size="small" />
                                        </div>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    }
                </Box>
                )
            },
        }),
    ];

    const csvConfig = mkConfig({
        fieldSeparator: ',',
        decimalSeparator: '.',
        useKeysAsHeaders: true,
    });


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