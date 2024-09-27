import Checkbox from '@mui/material/Checkbox';
import PizzaList from './PizzaList';
const PizzaDetail = () => {
    const cardPizza = [
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
    ];
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const ingredients = cardPizza?.map((list) => list?.ingredient)
    return (
        <div className="flex space-x-5 justify-between xl:w-[80%] w-[90%] m-auto">
            <div className="flex space-x-4">
                <img src={`/Group 6.png`} className='h-[400px]' alt="image2" />

            </div>
            <div className="space-y-3">
                <img src={`/Group 8.png`} className='h-[190px]' alt="image2" />
                <img src={`/Group 7.png`} className='h-[190px]' alt="image2" />
            </div>
            <div>
                <PizzaList pizza={cardPizza?.[0]} />
            </div>
        </div>
    )
}
export default PizzaDetail