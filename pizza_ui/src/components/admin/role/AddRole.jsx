import {
    MaterialReactTable,
    useMaterialReactTable,
    createMRTColumnHelper,
} from 'material-react-table';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GoCheck } from "react-icons/go";
import { Box, FormControl, IconButton, MenuItem, Radio, Select, Switch } from '@mui/material';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import { MdOutlineFileDownload } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { BsEyeFill } from "react-icons/bs";
import { data } from './makeRole';
import { useState } from 'react';
import { useMenu } from '../../../services/useMenu';
import { useUsers } from '../../../services/useUsers';

const columnHelper = createMRTColumnHelper();

const AddRole = () => {
    const label = [];
    const { isLoading, menu } = useMenu();
    console.log(menu)
    const { user } = useUsers();
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
        columnHelper.accessor('role_name', {
            header: 'Role Name',
            size: 90,
        }),
        columnHelper.accessor('created_At', {
            header: 'Created at',
        }),
        columnHelper.accessor('permissions', {
            header: 'Actions',
            size: 220,
            Cell: ({ row }) => {
                return (
                    <Box className="flex">
                        <button className={`flex space-x-2 items-center justify-center rounded-full w-[30%] ${row?.original?.status == 'active' ? 'bg-[#E6F3E6]' : 'bg-[#FFE6E6]'}  `}>
                            <p className={`${row?.original?.status == 'active' ? 'text-[#008000]' : 'text-[#FF0000]'}`}>{row?.original?.status}</p>
                            <Switch {...label} defaultChecked color={`${row?.original?.status == 'active' ? 'success' : 'warning'}`} />
                            
                        </button>
                        <IconButton
                            // size="small"
                            sx={{ marginLeft: '8px' }}
                            onClick={() => handleToppingIconClick(row.original)}
                        >
                            < BsEyeFill className='text-[#404040]' />
                        </IconButton>
                        <IconButton
                            // size="small"
                            sx={{ marginLeft: '8px' }}
                            onClick={() => handleToppingIconClick(row.original)}
                        >
                            <RiDeleteBin6Fill className='text-[#404040]' />
                        </IconButton>

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
                    <p className='text-[#797979] text-[1.2rem] pl-2'>Add Role</p>
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
export default AddRole