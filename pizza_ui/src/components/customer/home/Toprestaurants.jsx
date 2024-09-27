import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'; 
import { Card } from '@mui/material';
;
const Toprestaurants = () => {
    const featured = [
        { title: 'Azmera Pizza', description: 'In publishing and graphic design, Lorem ipsum is a placeholdertext commonly used to ...', avatar: '/avatar.png', color: 'FFFFFF', no: '2k' },
        { title: 'Azmera Pizza', description: 'In publishing and graphic design, Lorem ipsum is a placeholdertext commonly used to ...', avatar: '/avatar.png', color: 'FFFFFF', no: '2k' },
        { title: 'Azmera Pizza', description: 'In publishing and graphic design, Lorem ipsum is a placeholdertext commonly used to ...', avatar: '/avatar.png', color: 'FFFFFF', no: '2k' }
    ];
    return (
        <div className='bg-gradient-to-b from-[#FFF8F1] via-orange-100 to-[#FFF8F1] h-[45rem]  '>
            <div className='w-[95%] ml-auto  space-y-10 pt-36'>
                <p className="text-[#7F7C78] text-[4rem] font-semibold">Top Restaurants</p>
                <div className='flex'>
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={30}
                        modules={[Pagination]}
                        className="w-[100%] "
                    >
                        {featured?.map((item, index) =>
                            <SwiperSlide key={index} >
                                <Card className="w-[100%] m-auto " sx={{ borderRadius: '20px' }} >
                                    <Box sx={{ display: 'flex', backgroundColor: `#${item?.color}` }} >
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                                            <CardContent sx={{ flex: '1 0 auto' }} className=' '>
                                                <div className='flex items-center '>
                                                    <img src={`${item?.avatar}`} alt={`img${index}`} className='w-14 h-13 mx-3 ' />
                                                    <Typography component="div" variant="h5" className="" sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                                                        {item?.title}
                                                    </Typography>
                                                </div>
                                                <Typography
                                                    variant="subtitle1"
                                                    component="div"
                                                    sx={{ width: '105%' }}
                                                    className="text-[#7F7F7F]"
                                                >
                                                    {item?.description}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', width: '95%', padding: '1rem' }} >
                                            <CardContent sx={{ flex: '1 0 auto', borderRadius: '12px' }} className='space-y-2 bg-[#F2F9F2]'>
                                                <div className='flex pt-4 space-x-5 '>
                                                    <img src='/bolts.png' alt='img33' className=' w-20 h-20 mx-3 ' />
                                                    <div className='flex-col items-center '>
                                                        <Typography component="div" variant="h5" className="text-[#7F7F7F]" sx={{ fontSize: '', fontWeight: 'bold' }}>
                                                            Number of Order
                                                        </Typography>
                                                        <p className='text-[#FF9921] font-bold bg-[#] text-[3rem]'>{item?.no}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Box>
                                    </Box>
                                </Card>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Toprestaurants