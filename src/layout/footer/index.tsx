import classNames from "classnames/bind";
import style from "./footer.module.scss";
import SuggestItem from "../../component/suggestItem";



const Footer =()=>{
    const arr:number[] = [1,2,3,4];

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
   
    <h1>this is footer</h1>
</div>)

}

export default Footer ;