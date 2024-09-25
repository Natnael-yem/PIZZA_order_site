import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="">
            <div className="bg-[#CCB691] py-10">
                <div className="w-[90%] m-auto flex justify-between items-center">
                    <div className="flex font-bold text-[1.3rem] space-x-20">
                        <p>Home</p>
                        <p>Order</p>
                        <p>About Us</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center pl-20 space-x-3">
                            <img src="pizza.png" alt="img1" className="h-10" />
                            <button className="font-bold text-[#AF5901] text-[1.8rem]">Pizza</button>
                        </div>
                        <div className="flex items-center justify-end ">
                            <input className=" relative rounded-md w-[21rem] h-[3.5rem] px-6 py-3" placeholder="Your feedback..." />
                            <FaTelegramPlane className="absolute mr-4 text-[#FF8000] h-[36px] w-[36px]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#000000] text-white">
                <div className="w-[90%] py-4 m-auto flex justify-between items-center">
                    <div className="flex space-x-10">
                        <p>@2024 Pizza All Rights Reserved.</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="flex space-x-8">
                        <div className="rounded-full bg-[#141414] p-3" >
                            <FaFacebookF />
                        </div>
                        <div className="rounded-full bg-[#141414] p-3" >
                            <FaLinkedin />
                        </div>
                        <div className="rounded-full bg-[#141414] p-3" >
                            <FaTwitter />
                        </div>
                        <div className="rounded-full bg-[#141414] p-3" >
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer