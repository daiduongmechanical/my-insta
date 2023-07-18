import classNames from "classnames/bind";
import  style from "./loveIttem.module.scss";
 

const LoveIttemPage=({closeModel=true}:any)=>{

    const cx:any=classNames.bind(style)
    //bat event click ra ngoai content
    const clickOut = (e:any)=>{if(e.target === e.currentTarget){closeModel(false)}};
    return (
        <div className={cx("wrapper")}>
            <div className={cx("overlay_litem")} onClick={clickOut}>  
                <div className={cx("content_litem")}>
                    <p className={cx("wrapper_img")}><img className={cx("img_star")} src="video/star.jpg" alt="" /> </p>
                    <h1 className={cx("title_loveItem")}>Yêu thích</h1>
                    <p className={cx("content_loveItem")}>Bài viết mới từ những mục bạn yêu thích sẽ xuất hiện ở vị trí cao hơn trong bảng feed.</p>
                    <span className={cx("ok_btn")} onClick={clickOut}>OK</span>
                </div>
            </div>
        </div>
    )
}


export default LoveIttemPage;