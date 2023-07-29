import classNames from "classnames/bind";
import  style from "./input.module.scss";
import React, { useState } from "react";

interface InputItemProps{
    type?:string;
    suggestText?:string;
    name:string;
}

const MyInput:React.FC<InputItemProps>=({type,suggestText,name})=>{

    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const cx:any=classNames.bind(style)
    

    const showPass = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };
    
      const pStyle: React.CSSProperties = {
        position: "absolute", 
        left: "13px",
        top: "10px",
        color: "#606770",
        zIndex: 2,
        fontSize: value!==""? "12px": "14px",
        transform: value !== "" ? "translateY(-30%)" : "translateY(0%)",
        transition: "0.25s",
      };
      const inputStyle :React.CSSProperties = {
            width: "270px",
            height: "36px",
            paddingLeft: "10px",
            background: "transparent",
            border: "0.5px solid  #CCCCCC",
            fontWeight: "normal",
            zIndex: 3,
            fontSize: value!==""? "12px": "14px",
            paddingTop: value !== "" ? "10px" : "0px",
      }

    return (
        <div className={cx("itemInput")}>
            <p style={pStyle}>{suggestText}</p>
            <input name={name} style={inputStyle} type={showPassword ? "text" : type} value={value} onChange={handleChange}/>
            {type === "password" && value !== "" && (
                <div className={cx("show_hide")}>
                {showPassword ? (
                    <p onClick={showPass}>Ẩn</p>
                ) : (
                    <p onClick={showPass}>Hiện</p>
                )}
                </div>
            )}
        </div>
    )
}


export default MyInput