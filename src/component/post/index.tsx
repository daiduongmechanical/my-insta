import classNames from "classnames/bind";
import  Style  from "../post/post.module.scss";

const PostItem=()=>{

    const cx=classNames.bind(Style)

    return(
        <div className={cx("wrapper")}>

            <div className={cx("cart")}>
                <div className={cx("info")}>
                    <img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80" alt="bike" />
                    <div className={cx("name")}><p>name</p><span>info</span></div>
                    <p className={cx("icon")}>...</p>
                </div>

                <div className={cx("video")}>
                    <video>
                        <source src="./video/Download.mp4" type="video/mp4"/>
                    </video>
                    <p>loa</p>
                </div>
                <div className={cx("comment")}>
                    <div  className={cx("select")}>
                        <span className={cx("iconw")}>tim</span>
                        <span className={cx("iconx")}>cmt</span>
                        <span className={cx("icony")}>share</span>
                        <span className={cx("iconz")}>luu</span>
                    </div>
                </div>
           </div>

        </div> 
    )
}

export default PostItem;
