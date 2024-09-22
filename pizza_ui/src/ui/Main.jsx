import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Main() {

    return (
        <div >
            <Navbar />
            <div className="pt-">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main