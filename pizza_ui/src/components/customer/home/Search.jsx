const Search = () => {
    return (
        <>
            <div className="relative flex justify-between h-[55rem] w-full">
                <div className=" w-[85%] m-auto space-y-2 ">
                    <p className="relative z-20 bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent text-[12rem]  font-bold">
                        Order us
                    </p>
                    <p className="w-[46rem] relative z-20  font-semibold text-[1.6rem] ">In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual form of a document or a typeface without.</p>
                    <div className="flex pt-10 relative z-20 ">
                        <input className="rounded-full w-[47%] h-[120px] px-10 placeholder:text-[2rem] placeholder:text-slate-500" placeholder="Search" />
                        <img src="search.png" alt="img3" className=" flex absolute inset-y-[33%] left-[40%] bg-[#FF890F] h-[6rem] p-4 rounded-full" />
                    </div>
                </div>

                <div>
                    <img src="Image.png" alt="img2" className="absolute top-[6rem] z-40 right-0 w-[29%]" />
                    <img src="left1.png" alt="img2" className="absolute top-[40rem] z-30 right-[21rem]" />
                    <img src="left2.png" alt="img2" className="absolute top-[15rem] z-30 right-[25rem]" />
                </div>
            </div>
            <div class="absolute z-10 inset-0 bg-gradient-to-b from-[#FFF8F1] via-orange-300 to-[#FFF8F1] h-[80rem]"></div>
        </>
    )
}

export default Search