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
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(10)
        .optional(),
    confirmpassword: z.string().min(6, "Field must be at least 6 string long"),
}).refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
});

const Add = () => {
    const navigate = useNavigate();
    const {
        register, control,
        handleSubmit, formState: { errors }
    } = useForm({
        resolver: zodResolver(Schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
            confirmpassword: "",
        },
    });

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const onSubmit = async (data) => {
        console.log(data)
        // navigate('/home');
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
                <div className="space-y-2">
                    <p className="text-start w-[65%] m-auto font-semibold text-[1.4rem]">Add Admin</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex space-y-4 flex-col lg:w-[65%] m-auto">
                    <TextField
                        label="Admin Name"
                        className="lg:w-[30rem]"
                        {...register("name", {
                            required: "Name is required"
                        })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
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
                        id="phone"
                        label="Phone Number"
                        className="lg:w-[30rem]"
                        {...register("phone", {
                            required: "This field is required",
                        })}
                        error={!!errors.phone}
                        helperText={errors.phone?.message} />
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
                   
                    <button type="submit" className="bg-[#FF8000] py-2 text-white rounded-md font-semibold uppercase lg:w-[30rem]">CONTINUE</button>
                </form>
            </div>
        </div>
    )
}
export default Add