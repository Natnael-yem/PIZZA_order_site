import { useEffect, useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
const Dashboard = () => {
    const [sideBar, setSideBar] = useState('add-orders');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.replace('/', '');
        setSideBar(currentPath);

    }, [location]);

    const HandleNavigate = (id) => {
        console.log(id)
        navigate(`/${id}`);
    };

    return (
        <div className="w-[100%] ">
            <div className="flex justify-between items-center border border-gray px-2 py-5">
                <p className="text-[1.1rem] font-semibold">PIZZA</p>
                <img src="/menu.svg" alt="img10" className="h-9" />
            </div>
            <div className="flex-col shadow-xl">
                <div className="bg-[#FFF9F2] h-[8rem]">
                    <div className="w-[30%] m-auto ">
                        <img src="/pizza.png" alt="1" className="pt-8 h-[5.5rem]" />
                    </div>
                </div>
                <div className="flex-col space-y-4 h-screen">
                    <div className="flex flex-col">
                        <div onClick={() => HandleNavigate('add-orders')} className={`${sideBar === 'add-orders' ? 'text-[#FF8000] bg-[#FFCD99]' : ''} flex space-x-20   h-[3.3rem] py-2 mx-1 rounded-[.3rem]`}>
                            <div className={`${sideBar === 'add-orders' && 'h-9 w-[5px] rounded-md bg-[#FF8000]'} `}></div>
                            <div className="flex space-x-3 items-center">
                                <img src={`${sideBar === 'add-orders' ? ' /orderc.svg' : '/order.svg'}`} alt="order" className="h-7" />
                                <button className="font-semibold">Orders</button>
                            </div>
                        </div>
                        <div onClick={() => HandleNavigate('add-menu')} className={`${sideBar === 'add-menu' ? 'text-[#FF8000] bg-[#FFCD99]' : ''} flex space-x-20   h-[3.3rem] py-2 mx-1 rounded-[.3rem]`}>
                            <div className={`${sideBar === 'add-menu' && 'h-9 w-[5px] rounded-md bg-[#FF8000]'} `}></div>
                            <div className="flex space-x-3 items-center">
                                <img src={`${sideBar === 'add-menu' ? ' /pizzac.svg' : '/pizza.svg'}`} alt="user" className="h-7" />
                                <button className="font-semibold">Add menu</button>
                            </div>
                        </div>
                        <div onClick={() => HandleNavigate('role')} className={`${sideBar === 'role' ? 'text-[#FF8000] bg-[#FFCD99]' : ''} flex space-x-20   h-[3.3rem] py-2 mx-1 rounded-[.3rem]`}>
                            <div className={`${sideBar === 'role' && 'h-9 w-[5px] rounded-md bg-[#FF8000]'} `}></div>
                            <div className="flex space-x-3 items-center">
                                <img src={`${sideBar === 'role' ? ' /rolec.svg' : '/role.svg'}`} alt="role" className="h-7" />
                                <button className="font-semibold">Role</button>
                            </div>
                        </div>
                        <div onClick={() => HandleNavigate('users')} className={`${sideBar === 'users' ? 'text-[#FF8000] bg-[#FFCD99]' : ''} flex space-x-20   h-[3.3rem] py-2 mx-1 rounded-[.3rem]`}>
                            <div className={`${sideBar === 'users' && 'h-9 w-[5px] rounded-md bg-[#FF8000]'} `}></div>
                            <div className="flex space-x-3 items-center">
                                <img src={`${sideBar === 'users' ? ' /usersc.svg' : '/avatar.svg'}`} alt="avatar" className="h-7" />
                                <button className="font-semibold">User</button>
                            </div>
                        </div>
                    </div>
                    <hr className="w-[90%] m-auto" />
                    <div className="w-[20%] m-auto text-[#FF0000] flex space-x-5 ">
                        <img src="/Logout.svg" alt="imgs" />
                        <button className="font-semibold">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard