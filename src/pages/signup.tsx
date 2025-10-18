import { NavLink, useNavigate } from "react-router"
import { Button } from "../components/Button"
import { BrainIcon } from "../icons/brainIcon"
import { InputData } from "../utility/inputdata"
import { useRef, useState } from "react"
import { SignClickHandler } from "../utility/signClickHandler"

export const Signup = () => {
    const Navigate = useNavigate()
    const UsernameRef = useRef<any>(null)
    const PasswordRef = useRef<any>(null)
    const [errorMes, setErrorMes] = useState<string | null>(null)

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
                <InputData placeholder="User Name" ref={UsernameRef}/>
            </div>
            <div className="flex justify-center pt-1">
                <InputData placeholder="Password" ref={PasswordRef}/>
            </div>
            <div className="text-red-800 text-xs pl-10">
                    {errorMes? `* ${errorMes}`: null}
                </div>
            <div className="flex justify-center pt-8">
                <Button variant="Primary" size="md" text="Sign Up" fullWidth="no" onClick={() => {SignClickHandler({
                    userRef: UsernameRef,
                    passRef: PasswordRef,
                    setErrorMes,
                    URL: "/api/v1/Signup",
                    Navigate: Navigate
                })}}/>
            </div>
            <div className="flex justify-center pt-8 pb-3">
                Already have an account? <NavLink to="/Signin" className="pl-1 font-semibold underline text-blue-900"> [Sign In]</NavLink>
            </div>
        </div>
    </div>
}