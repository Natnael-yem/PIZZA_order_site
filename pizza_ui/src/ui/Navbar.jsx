import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Navbar = () => {
    const [nav , setNav] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.replace('/', '');
        setNav(currentPath);
        
    }, [location]);

    const HandleNavigate = (id) => {
        navigate(`/${id}`);
    };

    const handleRegister = () => {
        navigate('/auth');
    };
    
    return (
        <div className="flex flex-row absolute z-50 w-full justify-between items-center px-6 pt-2">
            <div className="flex items-center space-x-3">
                <img src="pizza.png" alt="img1" className=" h-10" />
                <button  className="font-bold text-[#AF5901] text-[1.8rem]">Pizza</button>
            </div>
            <button onClick={() => HandleNavigate('home')} className={nav === 'home' ? `font-semibold text-[1.8rem] text-[#FF8000]` :'font-semibold text-[1.8rem] text-[#504C48]'}>Home</button>
            <button onClick={() => HandleNavigate('orders')} className={nav === 'orders' ? `font-semibold text-[1.8rem] text-[#FF8000]` :'font-semibold text-[1.8rem] text-[#504C48]'}>Orders</button>
            <button onClick={() => HandleNavigate('who we are')} className={nav === 'who we are' ? `font-semibold text-[1.8rem] text-[#FF8000]` :'font-semibold text-[1.8rem] text-[#504C48]'}>who we are</button>
            <button onClick={handleRegister} className='bg-[#FF8000] text-[1.8rem] text-white font-semibold px-7 py-[7px] rounded-[4px]'>Register</button>
        </div>
    )
}

export default Navbar