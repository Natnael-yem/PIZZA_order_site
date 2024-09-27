import AddOrder from "../../components/admin/orders/AddOrder"
import Dashboard from "../../ui/Dashboard"
import { RxAvatar } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
const Orders = () => {


    return (
        <div className="flex flex-row ">
            <div className="flex w-[20%] ">
                <Dashboard />
            </div>
            <div className="flex-col w-[100%] bg-[#F8F8F8] h-fit ">
                <div className="bg-white ">
                    <div className="flex justify-between px-5 items-center border border-gray px-2 py-[1.2rem]">
                        <p className="text-[1.6rem] font-semibold ">Orders</p>
                        <div className="flex space-x-4 pr-5">
                            <IoIosNotificationsOutline className="text-[2rem]"/>
                            <RxAvatar className="text-[2rem]"/>

                        </div>
                    </div>
                </div>
                <div className="p-7">
                    <AddOrder />
                </div>
            </div>

        </div>
    )
}
export default Orders