import { TextField } from "@mui/material"
import { useForm } from "react-hook-form";
const Signup = () => {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        // login(data);

    }
    return (
        <div className="flex items-center">
            <div className="bg-[#FF8000] flex basis-2/4 h-screen justify-center">
                <img src="/pizza2.png" alt="img12" className="h-[22rem] m-auto" />
            </div>
            <div>
                <div className="flex items-center basis-2/4 pl-20 space-x-3">
                    <img src="pizza.png" alt="img1" className="h-10" />
                    <button className="font-bold text-[#AF5901] text-[1.8rem]">Pizza</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField id="outlined-basic"  label="Outlined" variant="outlined"  {...register("username", {
                        required: "This field is required",
                    })} />
                </form>

            </div>
        </div>
    )
}

export default Signup