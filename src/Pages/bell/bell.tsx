import classNames from "classnames/bind";
import  style from "./bell.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEllipsis, faStar, faStarHalf, faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import SuggestItem from "../../component/suggestItem";
import CreateComment from "../../component/create_comment";
import { useState } from "react";
import EllipsisPage from "../../component/ellipsis";
import LoveIttemPage from "../../component/loveItem";

const BellPage=({text,URL,close}:any)=>{
    const arr:number[] = [1,2,3,4,5,6,7,8];
    const cx:any=classNames.bind(style)
    const[ellip,setEllip]=useState<boolean>(false)
    const[loveItem,setLoveItem]=useState<boolean>(false)
    const handle=()=>{
        close(false)
    }
    //chuyền data từ ellipsisPage sang bell
    const handleClose=(data:boolean)=>setEllip(data)
    const loveItemClose=(data:boolean)=>setLoveItem(data)
    
    return (<div className={cx("wrapper")}>
        <div className={cx("overlay")}>
            <div className={cx("content")}>
                <div className={cx("video")}>
                    <video  controls className={cx("video_comment")}>
                    <source src={URL} type="video/mp4"/>  
                    </video>
                </div>

              
                <div className={cx("comments")}>
                    <div className={cx("info")}>
                        <img className={cx("imgUser")} src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80" alt="bike" />
                        <div className={cx("name")}><p>name</p><span>info</span></div>
                            <p className={cx("icon_star")} onClick={()=>setLoveItem(true)}>🌟</p>
                            <p className={cx("icon")} onClick={()=>setEllip(true)}><FontAwesomeIcon icon={faEllipsis}/></p>
                    </div>
                    <div className={cx("comment")}>
                        { arr.map((e)=> < SuggestItem comment key={e} />) }
                    </div>
                    <div className={cx("create_comment")}>
                        <CreateComment/>
                    </div>
                    {ellip && <EllipsisPage closeModel={handleClose}/>}
                    <div>
                        {loveItem && <LoveIttemPage closeModel={loveItemClose}/>}
                    </div>
                </div>
            </div>
            <h1 className={cx("icon_close")} onClick={handle}><FontAwesomeIcon icon={faDeleteLeft}/></h1>
        </div>
        

    </div>)
}


export default BellPage;