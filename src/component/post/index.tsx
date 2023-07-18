import classNames from "classnames/bind";
import  Style  from "../post/post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import {  faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {  useEffect, useRef, useState} from "react";

import CreateComment from "../create_comment";
import EllipsisPage from "../ellipsis";
import LoveIttemPage from "../loveItem";

const  PostItem=({url}:any)=>{

    const cx=classNames.bind(Style)
    const videoRef:any=useRef<HTMLVideoElement>(null);
const [loveItem,setLoveItem]=useState(false)
const [ellip,setEllip]=useState(false)
    useEffect(() => {
       const isInViewport = ():boolean => {
      const rect = videoRef.current.getBoundingClientRect(); 
      return rect?.top >= -405 && rect?.bottom <= 900
    };

        const handleScroll = () => {
          isInViewport() ? videoRef.current.play() : videoRef.current.pause()
      
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
       
      }, []);
  

const handleClose=(data:boolean)=>setEllip(data)
const loveItemClose=(data:boolean)=>setLoveItem(data)

    return(
        <div className={cx("wrapper__all")}>
            <div className={cx("wrapper")} >

            <div className={cx("cart")}>
                <div className={cx("info")}>
                    <img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80" alt="bike" />
                    <div className={cx("name")}><p>name</p><span>info</span></div>
                    <p className={cx("icon_star")} onClick={()=>setLoveItem(true)}>🌟</p>
                    <p className={cx("icon_ellipsis")}  onClick={()=>setEllip(true)}><FontAwesomeIcon icon={faEllipsis}/></p>
                </div>

              
                    <div className={cx("video")}>
                    <video  controls ref={videoRef}>
                        <source src={url} type="video/mp4"/>  
                    </video>
                   
                </div>
                <div className={cx("create_CommentPage")}>
                <CreateComment url={url} view/>
                </div>
                <div className={cx("ellipsisPage")}>
                  {ellip && <EllipsisPage closeModel={handleClose}/>}
                </div>
                <div className={cx("loveItemPage")}>
                  {loveItem && <LoveIttemPage closeModel={loveItemClose}/>}
                </div>
           </div>
           </div>
        </div> 
    )
}

export default PostItem;
