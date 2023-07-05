import classNames from "classnames/bind";
import  Style  from "../post/post.module.scss";

const PostItem=()=>{

    const cx=classNames.bind(Style)

return(<div className={cx("wrapper")}>post</div> )
}

export default PostItem;
