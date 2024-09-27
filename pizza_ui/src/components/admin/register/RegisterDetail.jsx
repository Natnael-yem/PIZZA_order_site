import { Checkbox, TextField } from "@mui/material"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";
import * as z from 'zod';
import { useState } from "react";

const Schema = z.object({
    name: z.string().min(1, 'Admin Name is required'),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    restaurant: z.string().min(1, 'restaurant is required'),
    location: z.string().min(1, 'Location is required'),
    confirmpassword: z.string().min(6, "Field must be at least 6 string long"),
}).refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
});

const RegisterDetail = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    const {
        register, control,
        handleSubmit, formState: { errors }
    } = useForm({
        resolver: zodResolver(Schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            restaurant: "",
            location: "",
            confirmpassword: "",
        },
    });

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const onSubmit = async (data) => {
        console.log(data)
        // navigate('/home');
    };

    const handleLogin = () => {
        setLogin(true);

    };

    const handleSignup = () => {
        setLogin(false);
    };
    return (
        <div className="flex items-center">
            <div className="bg-[#FF8000] flex basis-2/4 h-screen justify-center">
                <img src="/pizza2.png" alt="img12" className="h-[22rem] m-auto" />
            </div>
            <div className="space-y-7 flex-col  items-center">
                <div className="flex items-center basis-2/4 pl-20 space-x-3">
                    <img src="pizza.png" alt="img1" className="h-10" />
                    <button className="font-bold text-[#AF5901] text-[1.8rem]">Pizza</button>
                </div>
                {login &&
                    <div className="space-y-2">
                        <p className="text-start w-[65%] m-auto font-semibold text-[1.4rem]">Login</p>
                        <hr className="ml-20 w-[100%]" />
                    </div>}

                <form onSubmit={handleSubmit(onSubmit)} className="flex space-y-4 flex-col lg:w-[65%] m-auto">
                    {!login &&
                        <TextField
                            label="Admin Name"
                            className="lg:w-[30rem]"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    }
                    <TextField
                        type="email"
                        label="Email address"
                        className="lg:w-[30rem]"
                        {...register("email", {
                            required: "Email is required"
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        className="lg:w-[30rem]"
                        {...register("password", {
                            required: "This field is required",
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message} />
                    {!login && <>
                        <TextField
                            id="confirmpassword"
                            type="password"
                            label="Confirm Password"
                            className="lg:w-[30rem]"
                            {...register("confirmpassword", {
                                required: "This field is required",
                            })}
                            error={!!errors.confirmpassword}
                            helperText={errors.confirmpassword?.message} />
                        <TextField
                            label="Restaurant Name"
                            className="lg:w-[30rem]"
                            {...register("restaurant", {
                                required: "This field is required",
                            })}
                            error={!!errors.restaurant}
                            helperText={errors.restaurant?.message} />
                        <TextField
                            label="Location"
                            className="lg:w-[30rem]"
                            {...register("location", {
                                required: "This field is required",
                            })}
                            error={!!errors.location}
                            helperText={errors.location?.message} />
                    </>}
                    {!login ?
                        <div className="flex space-x-4 items-center">
                            <Checkbox {...label} sx={{ '&.Mui-checked': { color: '#FF8000', }, }} />
                            <p>I accept the Terms and Conditions</p>
                        </div> :
                        <div className="flex space-x-4 items-center">
                            <Checkbox {...label} sx={{ '&.Mui-checked': { color: '#FF8000', }, }} />
                            <p>Remember me</p>
                        </div>}
                    {!login ?
                        <button type="submit" className="bg-[#FF8000] py-2 text-white rounded-md font-semibold uppercase lg:w-[30rem]">Sign Up</button>
                        :
                        <button type="submit" className="bg-[#FF8000] py-2 text-white rounded-md font-semibold uppercase lg:w-[30rem]">LogIn</button>}
                    {!login ?
                        <p className="text-center lg:pl-20">Already have an account <span onClick={handleLogin} className="cursor-pointer text-[#FF8000]">Login</span></p>
                        :
                        <p className="text-center lg:pl-20">Don't have an account? <span onClick={handleSignup} className="cursor-pointer text-[#FF8000]">Sign up</span></p>}
                </form>

            </div>
        </div>
    )
}
export default RegisterDetail