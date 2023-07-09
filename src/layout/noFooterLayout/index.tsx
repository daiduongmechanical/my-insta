import Footer from "../footer";
import SideBar from "../sideBar";
import classNames from "classnames/bind";

import style from "./noFooterLayout.module.scss"


const NoFooterLayout =({children}:any)=> {
const cx=classNames.bind(style);



    return (
    <div className={cx("wrapper")}>
      
     <div className={cx("sidebar")}>  <SideBar/></div>

    <div className={cx("body")}>
   <div className={cx("main")}>{children}</div>
   <div className={cx("footer")}><Footer bottom/></div>
   </div> 
 
    </div>
    )
}

export default  NoFooterLayout;