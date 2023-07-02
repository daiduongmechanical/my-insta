import classNames from "classnames/bind";
import  style from "./homePage.module.scss";
import React from "react";

const HomePage=()=>{

    const cx:any=classNames.bind(style)

    return (<div className={cx("wrapper")}>
        <h1>this is home page</h1>
    </div>)
}


export default HomePage;