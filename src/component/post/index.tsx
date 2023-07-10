import classNames from "classnames/bind";
import  Style  from "../post/post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEllipsis, faFolder, faHeart, faShare, faSmile, } from "@fortawesome/free-solid-svg-icons";
import {  useEffect, useRef, useState} from "react";
import BellPage from "../../Pages/bell/bell";

const  PostItem=({url,text}:any)=>{

    const cx=classNames.bind(Style)
    const videoRef:any=useRef<HTMLVideoElement>(null);
    const[show,setShow]=useState<boolean>(false)

    const closeWindow=(data:boolean)=>setShow(data)

    useEffect(() => {
       const isInViewport = ():boolean => {
      const rect = videoRef.current.getBoundingClientRect(); 
      return rect?.top >= -405 && rect?.bottom <= 900
    };

        const handleScroll = () => {
          isInViewport()?videoRef.current.play():videoRef.current.pause()
      
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(()=>{
        
        window.addEventListener('wheel', (e) => {
            e.preventDefault();
          }, { passive: !show});
          
      },[show])
  
    

    return(
       
        <div className={cx("wrapper__all")}>
            {show && <BellPage text={text} close={closeWindow}/>}
            <div className={cx("wrapper")} >

            <div className={cx("cart")}>
                <div className={cx("info")}>
                    <img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80" alt="bike" />
                    <div className={cx("name")}><p>name</p><span>info</span></div>
                    <p className={cx("icon")}><FontAwesomeIcon icon={faEllipsis}/></p>
                </div>

              
                    <div className={cx("video")}>
                    <video  controls ref={videoRef}>
                        <source src={url} type="video/mp4"/>  
                    </video>
                   
                </div>
                <div className={cx("comment")}>
                    <div  className={cx("select")}>
                        <span className={cx("iconw")}><FontAwesomeIcon icon={faHeart}/></span>
                        <span className={cx("iconx")}><FontAwesomeIcon icon={faComment}/></span>
                        <span className={cx("icony")}><FontAwesomeIcon icon={faShare}/></span>
                        <span className={cx("iconz")}><FontAwesomeIcon icon={faFolder}/></span>
                    </div>
                    <p className={cx("likecmt")}>Luot thich</p>
                    <p className={cx("namecmt")}>name</p>
                    <p className={cx("capcmt")}>cap</p>
                    <p onClick={()=>setShow(true)} className={cx("displaycmt")}>xem tat ca comment</p>
                    <p className={cx("daycmt")}>day</p>

                    <div className={cx("createcmt")}>
                        <FontAwesomeIcon className={cx("iconcmt")} icon={faSmile}/>
                        <input type="text" placeholder="Thêm bình luận ... "/>
                        <p>Đăng</p>
                    </div>
                </div>
           </div>
           </div>
        </div> 
    )
}

export default PostItem;
