const Search = () => {
    return (
        <div className="pt-16 flex justify-between bg-gradient-to-b from-white via-orange-200 to-white h-[50rem] w-full">
            <div className=" w-[85%] m-auto space-y-5">
                <p className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent text-[12rem]  font-bold">
                    Order us
                </p>
                <p className="w-[45rem] font-semibold text-[1.5rem] text-[#3A342D]">In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the
                    visual form of a document or a typeface without.</p>
                <div className="">
                    <input className="rounded-full w-[30rem] h-[70px] px-10 placeholder:text-xl placeholder:text-slate-500" placeholder="Search" />
                    <img src="search.png" alt="img3" className="flex justify-end absolute top-0 me-0 bg-[#FF890F] p-3 rounded-full" />
                </div>
            </div>
            <div>
                <img src="Image.png" alt="img2" className="absolute top-[6rem] z-30 right-0 w-[29%]" />
                <img src="left1.png" alt="img2" className="absolute top-[40rem] z-20 right-[21rem]" />
                <img src="left2.png" alt="img2" className="absolute top-[15rem] right-[25rem]" />
            </div>

        </div>
    )
}

export default Search