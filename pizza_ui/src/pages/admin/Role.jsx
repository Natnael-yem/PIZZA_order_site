import AddOrder from "../../components/admin/orders/AddOrder"
import AddRole from "../../components/admin/role/AddRole"
import Dashboard from "../../ui/Dashboard"
import SideNav from "../../ui/SideNav"

const Role = () => {
    return (
        <div className="flex flex-row ">
            <div className="flex w-[20%] ">
                <Dashboard />
            </div>
            <div className="flex-col w-[100%] bg-[#F8F8F8]  ">
                <SideNav name={'Role'} />
                <div className="p-7">
                    <AddRole/>
                </div>
            </div>
        </div>
    )
}
export default Role