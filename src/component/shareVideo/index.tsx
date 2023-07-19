import classNames from "classnames/bind";
import  style from "./shareVideo.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft ,faXmark} from "@fortawesome/free-solid-svg-icons";
import SuggestItem from "../suggestItem";
import { useState } from "react";

const ShareVideoPage=({closeModel=true}:any)=>{
    const list:string[]=['name1', 'name2', 'name3']
    type ShareDataType = string[];
    const cx:any=classNames.bind(style)
    //bat event click ra ngoai content
    const  clickOut = (e:any)=>{if(e.target === e.currentTarget){closeModel(false)}};
    const [share,setShare]=useState<ShareDataType>([]);

const handleAdd=(data:string)=>{
    let arr:string[]=[...share];
    if (arr.includes(data)){
        arr.splice(arr.indexOf(data),1)
      setShare(arr)
    }else{ setShare(pre=>[...pre,data])}
   
}

  
    return (
        <div className={cx("wrapper_shareVideo")}> 
            <div onClick={clickOut} className={cx("share_video")}> 
                <div className={cx("title_share")}>
                    <p className={cx("space")}></p>
                    <h2 className={cx("text_share")}>Chia sẻ</h2> 
                    <p className={cx("icon_delete")}><FontAwesomeIcon icon={faDeleteLeft}/></p>
                </div>
                <div className={cx("share_to")}>
                    <p className={cx("to")}>Tới: </p>
                    {share.map(e=><div key={e} className={cx("select__share")}>{e}
                     <FontAwesomeIcon onClick={()=>handleAdd(e)}  className={cx("select__share--icon")} icon={faXmark}/>
                     </div>)} 
                     <input type="text" className={cx("input")} placeholder="Tìm kiếm..."/>
                </div>
                <div className={cx("suggest_share")}>
                    <p className={cx("suggest_text")}>Gợi ý</p>
                    <div className={cx("suggest_friends")}>
                        {list.map(e=> <SuggestItem listSelect={share} share addValue={handleAdd} key={e} name={e}/>)}
                    </div>
                    <div className={cx("show_message")} >
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


export default ShareVideoPage;