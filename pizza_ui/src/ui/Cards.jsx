import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Cards = ({item}) => {
    return (
        <Card className="w-[95%] m-auto text-white" sx={{ color: 'white', borderRadius: '50px' }} >
            <Box sx={{ display: 'flex', backgroundColor: `#${item?.color}` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                    <CardContent sx={{ flex: '1 0 auto' }} className='space-y-8 mx-16 my-4'>
                        <Typography component="div" variant="h5" className="" sx={{  fontSize: '2.5rem', fontWeight: 'bold' }}>
                            {item?.title} <span className='px-10 text-[2.5rem] text-[#FF9921]'>50% Off</span>
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                        >
                            {item?.description}
                        </Typography>
                        <button className='text-white rounded-md text-[1.3rem] font-semibold px-10 py-2 bg-[#FF9921]'>{item?.button}</button>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    className='h-[386px]  object-cover '
                    image={item?.image}
                    alt="img4"
                />
            </Box>
        </Card>
    )
}
export default Cards