import classNames from "classnames/bind";
import  style from "./shareVideo.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faO } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const shareVideoPage=({closeModel=true}:any)=>{

    const cx:any=classNames.bind(style)
    //bat event click ra ngoai content
    const  clickOut = (e:any)=>{if(e.target === e.currentTarget){closeModel(false)}};

    //show message and send to friend
    const nameRef = useRef(null);
    const [showMessage, setShowMessage] = useState(false);
    const setTransform = () => {
        setShowMessage(prevShowMessage => !prevShowMessage);  
             
    };



    return (
        <div className={cx("wrapper_shareVideo")}> 
            <div onClick={clickOut} className={cx("share_video")}> 
                <div className={cx("title_share")}>
                    <p className={cx("space")}></p>
                    <h2 className={cx("text_share")}>Chia sẻ</h2> 
                    <p className={cx("icon_delete")}><FontAwesomeIcon icon={faDeleteLeft}/></p>
                </div>
                <div className={cx("share_to")}>
                    <p className={cx("to")}>Tới: </p> <input type="text" className={cx("input")} placeholder="Tìm kiếm..."/>
                </div>
                <div className={cx("suggest_share")}>
                    <p className={cx("suggest_text")}>Gợi ý</p>
                    <div className={cx("suggest_friends")}>
                        <div className={cx("friend")}>
                           <img className={cx("img_friend")} src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/357062908_1140164660706185_2470281605044684794_n.jpg?stp=dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=H1VS8DmopWoAX-tJ9Rl&_nc_ht=scontent.fsgn15-1.fna&oh=00_AfDmntYqZMBfpe4aHFDubRTXhPNot4o5wOvYDGv4PGg8nA&oe=64B8F022" alt="" />
                            <p className={cx("name_friend")}> <p className={cx("name1")} ref={nameRef}>Danh Hai</p> <p className={cx("name2")}>hai6813</p> </p>
                           <svg viewBox="0 0 80 80" width="18" height="18" onClick={setTransform}>
                                <circle className={cx("circle")} cx="40" cy="40" r="38"/>
                           </svg>
                        </div>
                    </div>
                    <div className={cx("show_message")} style={{ transform: showMessage ? "translateY(0%)" : "translateY(60%)" }}>
                        <input type="text" className={cx("content_message")} placeholder="Soạn tin nhắn..."/>
                    </div>
                    <div  className={cx("send_message")}>
                        <button>Gửi riêng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default shareVideoPage;