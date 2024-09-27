import PizzaCard from "../../../ui/PizzaCard"
const OrderHistory = () => {
    const cardPizza = [
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', status: 'Ordered' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', status: 'Recevied' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', status: 'Recevied' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', status: 'Ordered'  },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', status: 'Recevied' },
        { name: 'Margherita', ingredient: ['Tomato', 'Mozzarella', 'Bell Peppers', 'Onions', 'Olives'], price: 150, image: 'Group 1.png', status: 'Recevied' },
    ];
    return (
        <div className='w-[85%] m-auto space-y-10 pb-2 pt-40'>
            <p className="text-[#7F7C78] text-[3rem] font-semibold">Order History</p>
            <div className="grid m-auto grid-cols-3 gap-7">
                {cardPizza?.map((item, index) =>
                    <PizzaCard key={index} item={item} />
                )}
            </div>
        </div>
    )
}
export default OrderHistory;