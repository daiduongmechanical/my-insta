import classNames from "classnames/bind";
import  Style  from "../post/post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEllipsis, faFolder, faHeart, faSave, faShare, faSmile, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const PostItem=()=>{

    const cx=classNames.bind(Style)

    return(
        <div className={cx("wrapper")}>

            <div className={cx("cart")}>
                <div className={cx("info")}>
                    <img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80" alt="bike" />
                    <div className={cx("name")}><p>name</p><span>info</span></div>
                    <p className={cx("icon")}><FontAwesomeIcon icon={faEllipsis}/></p>
                </div>

                <div className={cx("video")}>
                    <video controls>
                        <source src="./video/Download.mp4" type="video/mp4"/>  
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
                    <p className={cx("displaycmt")}>xem tat ca comment</p>
                    <p className={cx("daycmt")}>day</p>

                    <div className={cx("createcmt")}>
                        <FontAwesomeIcon className={cx("iconcmt")} icon={faSmile}/>
                        <input type="text" placeholder="Thêm bình luận ... "/>
                        <p>Đăng</p>
                    </div>
                </div>
           </div>

        </div> 
    )
}

export default PostItem;
