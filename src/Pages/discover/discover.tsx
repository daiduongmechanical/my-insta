import classNames from "classnames/bind";
import  style from "./discover.module.scss";
const DiscoverPage=()=>{

    const cx:any=classNames.bind(style)

    return (<div className={cx("wrapper")}>Discover page</div>)
}


export default DiscoverPage;