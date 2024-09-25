import Fasting from "../components/home/Fasting"
import Featured from "../components/home/Featured"
import Popularpizza from "../components/home/Popularpizza"
import Search from "../components/home/Search"
import Toprestaurants from "../components/home/Toprestaurants"

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