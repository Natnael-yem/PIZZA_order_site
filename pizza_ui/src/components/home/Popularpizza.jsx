import PizzaCard from "../../ui/PizzaCard"

const Popularpizza = () => {
    const cardPizza = [
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', restaurant: 'Azmera Pizza', restaurant_image: 'avatar.png' },
    ];
    return (
        <div className='w-[85%] m-auto space-y-10 pb-2'>
            <p className="text-[#7F7C78] text-[4rem] font-semibold">Popular Pizzas</p>
            <div className="grid m-auto grid-cols-3 gap-y-7">
                {cardPizza?.map((item, index) =>
                    <PizzaCard key={index} item={item} />
                )}
            </div>
        </div>
    )
}

export default Popularpizza