interface InputProps{
    placeholder: string
}


export const InputData = (prop: InputProps) => {
    return <input type="text" placeholder={`${prop.placeholder}`} className="bg-white shadow p-2 rounded-sm mt-5"/>
}