import classNames from "classnames/bind";
import style from "./footer.module.scss";
import SuggestItem from "../../component/suggestItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";



const Footer =()=>{
    const arr:number[] = [1,2,3,4];
    const info:string[]=["About","Help","Press","API","Jobs","Privacy","Terms","Locations","Language","Meta verified"]

    const cx:any=classNames.bind(style)



return (<div className={cx("wrapper")}>
    <div className={cx("profile")}>
    <SuggestItem big/>
    </div>
<div className={cx("suggest")}>
<span>Suggested for you</span>
<b>See all</b>
</div>
    
    {arr.map(()=>  <SuggestItem/>)}
   
    <div className={cx("infomation")}>
     
        {info.map((e,index)=> <div className={cx("dot__cover")} key={e}>
            <a href="">{e}</a>
        {index!==info.length-1 &&<FontAwesomeIcon className={cx("dot")} icon={faCircle}/>}
        </div> )}
       
        
    </div>
</div>)

}

export default Footer ;