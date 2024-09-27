import Fasting from "../../components/customer/home/Fasting"
import Featured from "../../components/customer/home/Featured"
import Popularpizza from "../../components/customer/home/Popularpizza"
import Search from "../../components/customer/home/Search"
import Toprestaurants from "../../components/customer/home/Toprestaurants"


const Home = () => {
    return (
       <div className="flex flex-col bg-[#FFF8F1] pb-10">
        <Search/>
        <Featured/>
        <Toprestaurants/>
        <Popularpizza/>
        <Fasting/>
       </div>
    )
}

export default Home