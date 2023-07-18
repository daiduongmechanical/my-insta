import classNames from "classnames/bind";
import  style from "./ellipsis.module.scss";


const EllipsisPage=({closeModel=true}:any)=>{

    const cx:any=classNames.bind(style)
    //bat event click ra ngoai content
   const  clickOut = (e:any)=>{if(e.target === e.currentTarget){closeModel(false)}};
    return (
        <div className={cx("wrapper")}> 
            <div onClick={clickOut} className={cx("overlay_elp")}> 
                <div className={cx("content_elp")}>
                    <span className={cx("report", "span_elp")}>Báo cáo</span>
                    <span className={cx("unfollow", "span_elp")}>Bỏ theo dõi</span>
                    <span className={cx("span_elp")}>Gỡ khỏi mục yêu thích </span>
                    <span className={cx("span_elp")}>Đi tới bài viết</span>
                    <span className={cx("span_elp")}>Chia sẽ lên...</span>
                    <span className={cx("span_elp")}>Sao chép liên kết </span>
                    <span className={cx("span_elp")}>Nhúng</span>
                    <span className={cx("span_elp")}>Giới thiệu về tài khoản này</span>
                    <span className={cx("span_elp")}>Hủy</span>
                </div>
            </div>
        </div>
    )
}


export default EllipsisPage;