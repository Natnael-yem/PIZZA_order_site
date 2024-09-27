import PizzaCard from "../../../ui/PizzaCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules'; 
const Fasting = () => {
    const cardPizza = [
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
    ];

    return (
        <div className='w-[93%] ms-auto space-y-14 pt-7 '>
            <p className="text-[#7F7C78] text-[4rem] font-semibold">Fasting</p>
                <Swiper
                    slidesPerView={3.5}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="w-auto"
                >
                    {cardPizza?.map((item, index) =>
                        <SwiperSlide key={index} >
                            <PizzaCard item={item} />
                        </SwiperSlide>
                    )}
                </Swiper>
        </div>
    )
}

export default Fasting