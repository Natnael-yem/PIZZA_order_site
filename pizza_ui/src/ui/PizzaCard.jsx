import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const PizzaCard = ({ item }) => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }} clasName="items-center mb-2">
            <Card sx={{ borderRadius: '20px' }}>
                <img src={`/${item?.image}`} className='m-auto pt-8' alt="image2" />
                <CardContent sx={{ paddingX: '30px' }} className='space-y-2'>
                    <Typography sx={{ fontSize: '2rem', fontWeight: 'bold' }} className={item?.price ? `` : `text-center`}>
                        {item?.name}
                    </Typography>
                    <Typography sx={{ fontSize: '1.05rem' }} className={item?.price ? `` : `text-center`}>
                        {item?.ingredient.map((ingre, index) => (
                            ingre + ', '))}
                    </Typography>
                    {item?.price &&
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <Typography variant="body2" sx={{ color: '#01C550', fontSize: '3.6rem', fontWeight: 'bold' }}>
                                    {item?.price}
                                </Typography>
                                <p className=' text-[1.2rem]'>Birr</p>
                            </div>
                            {item?.status ?
                                <button className={`${item?.status === 'Ordered' ? 'text-[#FFA500]' :'text-[#008000]'} font-bold text-[2rem]  px-10 py-[7px] rounded-lg`}>{item?.status}</button> :
                                <button className='bg-[#FF8000] text-[2rem] text-white font-semibold px-10 py-[7px] rounded-lg'>Order</button>
                            }
                        </div>
                    }
                    {item?.restaurant &&
                        <div className='space-y-3 pt-2'>
                            <hr className='shadow-lg' />
                            <div>
                                <div className='flex items-center justify-between '>
                                    <img src={`/${item?.restaurant_image}`} alt='img' className='w-[4rem] h-[4rem] mx-3 ' />
                                    <Typography component="div" variant="h5" className="" sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                                        {item?.restaurant}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    }
                </CardContent>

            </Card>
        </Box>
    )
}
export default PizzaCard