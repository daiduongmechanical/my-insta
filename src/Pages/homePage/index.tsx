import classNames from "classnames/bind";
import  style from "./homePage.module.scss";
import PostItem from "../../component/post";





const HomePage=()=>{

    const cx:any=classNames.bind(style)
  
  

let arr:string[]=["./video/vs1.mp4", "./video/vs2.mp4", "./video/vs3.mp4", "./video/vs4.mp4", "./video/vs5.mp4"];



    return (
    <div className={cx("wrapper__all")}>

 {arr.map((e,index)=><PostItem key={index} text={index} url={e}/>
 
 )}
    </div>)
}


export default HomePage;