import { NavLink, useNavigate } from "react-router"
import { Button } from "../components/Button"
import { BrainIcon } from "../icons/brainIcon"

interface InputProps{
    placeholder: string
}

const InputData = (prop: InputProps) => {
    return <input type="text" placeholder={`${prop.placeholder}`} className="bg-white shadow p-2 rounded-sm mt-5"/>
}

export const Signin = () => {
    const Navigate = useNavigate()

    return <div className="w-screen h-screen bg-[#F4F4F4] flex justify-center items-center">
        <div className="bg-white rounded-md shadow w-72">
            <div className="flex justify-center items-center pt-4 text-2xl">
                <BrainIcon size="xl"/>
                <div className="pl-2">
                    Brainly
                </div>
            </div>
            <div className="text-xl text-center font-medium pt-5"> 
                Sign In
            </div>
            <div className="text-center pt-6">
                <InputData placeholder="UserName"/>
            </div>
            <div className="text-center pt-1">
                <InputData placeholder="Password"/>
            </div>
            <div className="flex justify-center items-center pt-8">
                <Button variant="Primary" size="md" text="Sign In" fullWidth="no" onClick={() => {Navigate("/DashBoard")}}/>
            </div>
            <div className="text-center pt-8 pb-3">
                Dont have an account? <NavLink to="/Signup" className="pl-1 underline text-blue-900 font-semibold">[Sign Up]</NavLink>
            </div>
        </div>
    </div>
}