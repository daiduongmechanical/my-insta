import classNames from "classnames/bind";
import style from "./footer.module.scss";
import SuggestItem from "../../component/suggestItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";



const Footer =({bottom}:any)=>{
    const arr:number[] = [1,2,3,4];
    const info:string[]=["About","Help","Press","API","Jobs","Privacy","Terms","Locations","Language","Meta verified"]

    const cx:any=classNames.bind(style)



return (<div className={cx("wrapper",{bottom})}>
    {!bottom &&<div className={cx("profile")}>
    <SuggestItem big/>
    </div>}
<div className={cx("suggest")}>
{ !bottom &&<span>Suggested for you</span>}
{!bottom&& <b>See all</b>}
</div>
    
    {!bottom&& arr.map(()=>  <SuggestItem/>)}
   
    <div className={cx("infomation")}>
     
        {info.map((e,index)=> <div className={cx("dot__cover")} key={e}>
            <a href="">{e}</a>
        {index!==info.length-1 && !bottom&&<FontAwesomeIcon className={cx("dot")} icon={faCircle}/>}
        </div> )}
       
       
    </div>
    <p className={cx("infomation--more")}>© 2023 Instagram from Meta</p>   
</div>)

}

export default Footer ;