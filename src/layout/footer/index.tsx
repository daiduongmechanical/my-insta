import classNames from "classnames/bind";
import style from "./footer.module.scss";


const Footer =()=>{

    const cx:any=classNames.bind(style)



return (<div className={cx("wrapper")}>
    <h1>this is footer</h1>
</div>)

}

export default Footer ;