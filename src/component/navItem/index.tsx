import classNames from "classnames/bind";
import style from "./NavItem.module.scss"
import { NavLink } from "react-router-dom";

const NavItem=({children,to}:any)=>{

    const cx=classNames.bind(style)
    return <div className={cx("wrapper")}>
<NavLink to={to}>
    {children}
</NavLink>
    </div>
}

export default NavItem;