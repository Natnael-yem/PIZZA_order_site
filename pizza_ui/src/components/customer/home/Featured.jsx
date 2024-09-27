import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import Cards from '../../../ui/Cards';

const Featured = () => {
    const [active, setActive] = useState('0');
    const featured = [
        { title: 'Make Your First Order and Get', description: 'In publishing and graphic design, Lorem ipsum is a placeholdertext commonly used to demonstrate the visual form of a document or a typeface without.', image: '/pizza 1.png', button: 'Order Now', color: '2F2F2F' },
        { title: 'Make Your First Order and Get', description: 'In publishing and graphic design, Lorem ipsum is a placeholdertext commonly used to demonstrate the visual form of a document or a typeface without.', image: '/pizza 2.png', button: 'Order Now', color: '50482B' },
        { title: 'Make Your First Order and Get', description: 'In publishing and graphic design, Lorem ipsum is a placeholdertext commonly used to demonstrate the visual form of a document or a typeface without.', image: '/pizza 3.png', button: 'Order Now', color: '296D60' }
    ];
    return (
        <div className='relative z-20 w-[90%] pt-[16rem] m-auto space-y-10'>
            <p className="text-[#7F7C78] text-[4rem] font-semibold">Featured pizza</p>
            <div>
                <div className="w-[100%] h-[30rem] flex flex-col items-center ">
                    <Swiper
                        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                        autoplay={{ delay: 2000 }}
                        modules={[Autoplay, Pagination]}
                        className="w-[100%] h-[30rem] space-y-3"
                    >
                        {featured?.map((item, index) =>
                            <SwiperSlide key={index} >
                                <Cards item={item} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div className='space-x-4 flex '>
                        {featured?.map((item, index) => (
                            <p key={index} className={`${index == active ? 'bg-[#FF9921]' : 'bg-[#B6B6B6]'} w-8 h-8 rounded-full`}></p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured