import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Main() {

    return (
        <div >
            <Navbar />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main