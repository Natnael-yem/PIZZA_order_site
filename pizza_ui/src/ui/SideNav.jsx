import { IoIosNotificationsOutline } from "react-icons/io"
import { RxAvatar } from "react-icons/rx"

const SideNav = ({name}) => {
    return (
        <div className="bg-white ">
                    <div className="flex justify-between px-5 items-center border border-gray px-2 py-[1.2rem]">
                        <p className="text-[1.6rem] font-semibold ">{name}</p>
                        <div className="flex space-x-4 pr-5">
                            <IoIosNotificationsOutline className="text-[2rem]"/>
                            <RxAvatar className="text-[2rem]"/>
                        </div>
                    </div>
                </div>
    )
}
export default SideNav