import classNames from "classnames/bind";
import  style from "./homePage.module.scss";
import PostItem from "../../component/post";

const HomePage=()=>{

    const cx:any=classNames.bind(style)

    return (
    <div className={cx("wrapper")}>
    <PostItem/>
    </div>)
}


export default HomePage;