import classNames from "classnames/bind";
import  Style  from "./suggestItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

interface ISuggestItemProps{
    big?:boolean;
    comment?:boolean;
    name?:string;
    share?:boolean;
    addValue?: (value: string) => void;
    listSelect?:string[];
}


const SuggestItem:React.FC<ISuggestItemProps>=({big,comment,name,share,addValue,listSelect})=>{

    const cx=classNames.bind(Style)
    const [showShare,setShowShare]=useState<boolean>(false)
    useEffect(()=>{
        if(listSelect!==undefined && name!==undefined){
            if(listSelect.includes(name)){
            setShowShare(true)
            }else{
                setShowShare(false)   
            }
                }
            
    },[listSelect])

    const handleAddValue=()=>{
        if(name!==undefined && addValue!==undefined){
addValue(name)
    }}

return( <div className={cx("wrapper",{big})}>
    <img src="https://media.istockphoto.com/id/833281682/vector/cartoon-funny-monster-face-vector-halloween-blue-monster-avatar-with-wide-smile.jpg?s=612x612&w=0&k=20&c=ZGthTYDKLkh8B21XUV6lw8J6VuOhE_zyMH_bKUPXBes=" alt="error"  className={cx("avatar")}/>
    <div className={cx("info")}>
        <div className={cx("info--data")}>
            <b>{name?name:"name"}</b>
            {comment && <p>comment</p>}
            {!comment && <span>Suggest for you</span>}
        </div>
        <div className={cx("time")}>
            {comment && <b>12 phut</b>}
            {comment && <p>tra loi</p>}
        </div>

        <input type=""  placeholder=""/>
    </div>

    <div className={cx("heart")}>
        <p>{comment &&<FontAwesomeIcon icon={faHeart}/>}</p>
        <p>{share && showShare && <FontAwesomeIcon onClick={handleAddValue} icon={faCircleCheck}/>}</p>
        <p>{share && !showShare && <FontAwesomeIcon onClick={handleAddValue} icon={faCircle}/>}</p>
    </div>
</div>)
}

export default SuggestItem;
