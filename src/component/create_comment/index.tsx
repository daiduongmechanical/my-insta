import classNames from "classnames/bind";
import  Style  from "../create_comment/comment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faFolder, faHeart, faShare, faSmile, } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import BellPage from "../../Pages/bell/bell";
import ShareVideoPage from "../shareVideo";

const  CreateComment=({url,text,view}:any)=>{

    const cx=classNames.bind(Style)
    const[show,setShow]=useState<boolean>(false)
    const [showShare,setShowShare]=useState<boolean>(false)

    const closeWindow=(data:boolean)=>setShow(data)

      useEffect(()=>{ 
        show ?
        window.addEventListener('wheel', (e)=>{
            e.preventDefault();
            }, { passive: false})
        :
        window.addEventListener('wheel', (e)=>{
            e.preventDefault();
            },{ passive: true},)
        },[show])

   
   useEffect(()=>{
     
      window.addEventListener('keydown', (e)=>{
        if(e.code==="Escape"){
            setShowShare(false)
        }
      })

     window.removeEventListener('keydown', ()=>{})
   },[])

        return(
            <div className={cx("wrapper__all")}>    
{showShare && <ShareVideoPage/>}
            {show && <BellPage text={text} URL={url} close={closeWindow}/>}
                <div className={cx("comment")}>
                    <div  className={cx("select")}>
                        <span className={cx("iconw")}><FontAwesomeIcon icon={faHeart}/></span>
                        <span className={cx("iconx")} onClick={()=>setShow(true)}><FontAwesomeIcon icon={faComment}/></span>
                        <span className={cx("icony")}><FontAwesomeIcon onClick={()=>setShowShare(true)} icon={faShare}/></span>
                        <span className={cx("iconz")}><FontAwesomeIcon icon={faFolder}/></span>
                    </div>
                    {!view && 
                    <div className={cx("like_day")}>
                        <p className={cx("like")}>3 luot thich</p>
                        <p className={cx("day")}>ngay thang nam</p>
                    </div>
                    }
                    {view && <Fragment><p className={cx("likecmt")}>Luot thich</p>
                        <p className={cx("namecmt")}>name</p>
                        <p className={cx("capcmt")}>cap</p>
                        <p onClick={()=>setShow(true)} className={cx("displaycmt")}>xem tat ca comment</p>
                        <p className={cx("daycmt")}>day</p>
                    </Fragment>}

                    <div className={cx("createcmt")}>
                        <FontAwesomeIcon className={cx("iconcmt")} icon={faSmile}/>
                        <input type="text" placeholder="Thêm bình luận ... " />
                        <p>Đăng</p>
                    </div>
                </div>
            </div>
        )
    }

export default CreateComment;
