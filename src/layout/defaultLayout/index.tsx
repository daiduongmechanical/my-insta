
import Header from "../header";
import Footer from "../footer";
import SideBar from "../sideBar";
import classNames from "classnames/bind";

import style from "./layout.module.scss";


const defaultLayOut =({children}:any)=> {
const cx=classNames.bind(style);



    return (
    <div className={cx("wrapper")}>
      
     <div className={cx("sidebar")}>  <SideBar/></div>

    <div className={cx("body")}>
   <div className={cx("main")}>{children}</div>
   <div className={cx("footer")}>
    
    <Footer/></div>
   </div> 
    </div>
    )
}

export default  defaultLayOut;