import type React from "react";

interface InputProps{
    name: string;
    id: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    pattern?: string;
}

export function Input(props: InputProps){

    const baseStyle =
    "rounded-xl p-2 bg-black text-white border border-[#6B6B6B] placeholder-[#6b6b6b]";

    return(
        <div className="flex flex-col">
            
            <label htmlFor={props.id} className="text-[#6b6b6b]">
                {props.name}
            </label>
            <input type={props.type || "text"} 
                id= {props.id} 
                name= {props.name} 
                placeholder= {props.placeholder || ""}
                value={props.value}
                onChange={props.onChange}    
                className={`${baseStyle} ${props.className || ""}`}      
            />

        </div>
    )

}