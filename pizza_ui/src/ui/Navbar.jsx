import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const HandleHome = () => {
        navigate('/'); 
      };
    return (
        <div className="flex flex-row fixed z-50 w-full justify-between items-center px-6 pt-2">
            <div className="flex items-center space-x-3">
                <img src="pizza.png" alt="img1" className=" h-10" />
                <button onClick={HandleHome} className="font-bold text-[#AF5901] text-[1.8rem]">Pizza</button>
            </div>
            <button className="font-semibold text-[1.8rem] text-[#FF8000]">Home</button>
            <button className="font-semibold text-[1.8rem] text-[#504C48]">Orders</button>
            <button className="font-semibold text-[1.8rem] text-[#504C48]">who we are</button>
            <button className='bg-[#FF8000] text-[1.8rem] text-white font-semibold px-7 py-[7px] rounded-[4px]'>Register</button>
        </div>
    )
}

export default Navbar