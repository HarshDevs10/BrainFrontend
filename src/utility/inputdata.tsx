import type React from "react"

interface InputProps{
    placeholder: string
    type?:string
    ref?: React.ForwardedRef<any>
}


export const InputData = (prop: InputProps) => {
  return (
    <input
  type={prop.type || "text"}
  ref={prop.ref}
  placeholder={prop.placeholder}
 autoComplete="new-password" 
  name="no-password" 
  spellCheck={false}
  className="bg-white shadow p-2 pr-10 rounded-sm mt-5"
/>
  );
};