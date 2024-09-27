import { Checkbox, Typography } from "@mui/material"
import { useState } from "react";
import { HiMinus, HiOutlinePlus, HiMiniArrowUpRight } from "react-icons/hi2";

const PizzaList = ({ pizza }) => {
    const [quantity, setQuantity] = useState(1);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleQuantityUp = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1);
        }
    };
    const handleQuantityDown = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className="space-y-5">
            <p className="text-[3rem] font-bold">Margherita</p>
            <div className="grid grid-cols-3 ">
                {pizza?.ingredient?.map((list) =>
                    <div className="flex items-center">
                        <Checkbox {...label} sx={{'&.Mui-checked': {color: '#FF8000', },}} />
                        <p>{list}</p>
                    </div>
                )}
            </div>
            <div className="flex space-x-8 items-center">
                <button onClick={handleQuantityDown} className="border-[#FF8000] font-bold text-[2rem] border bg-white rounded-md  p-2"><HiMinus /></button>
                <p className="text-[1.5rem]">{quantity}</p>
                <button onClick={handleQuantityUp} className="border-[#FF8000] text-[2rem]  font-bold border bg-white rounded-md  p-2"><HiOutlinePlus /></button>
                <div className='flex'>
                    <Typography variant="body2" sx={{ color: '#01C550', fontSize: '3.2rem', fontWeight: 'bold' }}>
                        {pizza?.price}
                    </Typography>
                    <p className=' text-[1.2rem]'>Birr</p>
                </div>
            </div>
            <div className="bg-[#FF8000] rounded-lg items-center flex justify-between">
                <button className=' text-[2rem] text-white font-semibold px-10 py-[7px] '>Order</button>
                <HiMiniArrowUpRight className="text-white text-[2rem] pr-1 " />
            </div>

        </div>
    )
}
export default PizzaList