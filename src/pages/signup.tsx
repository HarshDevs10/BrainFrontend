import { NavLink, useNavigate } from "react-router"
import { Button } from "../components/Button"
import { BrainIcon } from "../icons/brainIcon"

interface InputProps{
    placeholder: string
}

const InputData = (prop: InputProps) => {
    return <input type="text" placeholder={`${prop.placeholder}`} className="bg-white shadow p-2 rounded-sm mt-5"/>
}

export const Signup = () => {
    const Navigate = useNavigate()

    return <div className="h-screen w-screen bg-[#F4F4F4] flex justify-center items-center">
        <div className="bg-white shadow rounded-md w-72">
            <div className="flex justify-center items-center text-2xl pt-4">
                <BrainIcon size="xl"/>
                <div className="pl-2">
                    Brainly
                </div>
            </div>
            <div className="text-center text-xl font-medium pt-5">
                Sign Up
            </div>
            <div className="flex justify-center pt-6">
                <InputData placeholder="User Name"/>
            </div>
            <div className="flex justify-center pt-1">
                <InputData placeholder="Password"/>
            </div>
            <div className="flex justify-center pt-8">
                <Button variant="Primary" size="md" text="Sign Up" fullWidth="no" onClick={() => {Navigate("/DashBoard")}}/>
            </div>
            <div className="flex justify-center pt-8 pb-3">
                Already have an account? <NavLink to="/Signin" className="pl-1 font-semibold underline text-blue-900"> [Sign In]</NavLink>
            </div>
        </div>
    </div>
}