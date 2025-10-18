import { NavLink, useNavigate } from "react-router"
import { Button } from "../components/Button"
import { BrainIcon } from "../icons/brainIcon"
import { InputData } from "../utility/inputdata"
import { useRef, useState } from "react"
import { SignClickHandler } from "../utility/signClickHandler"


export const Signin = () => {
    const UsernameRef = useRef<any>(0)
    const PasswordRef = useRef<any>(0)
    const [errorMes, setErrorMes] = useState<string | null>(null)
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
                <InputData placeholder="UserName" ref={UsernameRef}/>
            </div>
            <div className="text-center pt-1">
                <InputData placeholder="Password" ref={PasswordRef}/>
            </div>
            <div className="text-red-800 text-xs pl-10">
                {errorMes? `* ${errorMes}`: null}
            </div>
            <div className="flex justify-center items-center pt-8">
                <Button variant="Primary" size="md" text="Sign In" fullWidth="no" onClick={() => {SignClickHandler({
                    userRef: UsernameRef,
                    passRef: PasswordRef,
                    setErrorMes,
                    URL: "/api/v1/Signin",
                    Navigate: Navigate
                })}}/>
            </div>
            <div className="text-center pt-8 pb-3">
                Dont have an account? <NavLink to="/Signup" className="pl-1 underline text-blue-900 font-semibold">[Sign Up]</NavLink>
            </div>
        </div>
    </div>
}