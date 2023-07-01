import classNames from "classnames/bind";
import style from"./header.module.scss";


const Header =()=>{

const cx:any=classNames.bind(style);


return (<div className={cx("wrapper")}>
    <p>this is header</p>
</div>)

}

export default Header ;