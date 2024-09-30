import AddOrder from "../../components/admin/orders/AddOrder"
import Dashboard from "../../ui/Dashboard"
import SideNav from "../../ui/SideNav"

const AddMenu = () => {
    return (
        <div className="flex flex-row ">
            <div className="flex w-[20%] ">
                <Dashboard />
            </div>
            <div className="flex-col w-[100%] bg-[#F8F8F8]  ">
                <SideNav name={'Add menu'} />
                <div className="p-7">
                    <AddOrder />
                </div>
            </div>
        </div>
    )
}
export default AddMenu