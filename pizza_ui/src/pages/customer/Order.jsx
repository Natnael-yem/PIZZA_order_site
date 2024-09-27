import OrderHistory from "../../components/customer/order/OrderHistory"
import Navbar from "../../ui/Navbar"

const Order = () => {
    return (
        <div className="bg-[#FFF8F1] pb-10">
            <Navbar/>
            <OrderHistory />
        </div>
    )
}

export default Order