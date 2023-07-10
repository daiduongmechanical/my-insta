import classNames from "classnames/bind";
import  style from "./bell.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const BellPage=({text,close}:any)=>{

    const cx:any=classNames.bind(style)

   const handle=()=>{
    close(false)
   }
  
    return (<div className={cx("wrapper")}>
        
        <div className={cx("overlay")}>
            <div className={cx("text")}>
                {text}
                <h1 onClick={handle}><FontAwesomeIcon icon={faDeleteLeft}/></h1>
            </div>
        </div>
        

    </div>)
}


export default BellPage;