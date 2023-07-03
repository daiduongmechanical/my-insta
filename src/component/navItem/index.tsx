import classNames from "classnames/bind";
import style from "./NavItem.module.scss"
import { NavLink } from "react-router-dom";
import "./navitem.css"



const NavItem=({children,to}:any)=>{

    const cx  =classNames.bind(style)
    return <div className={cx("wrapper")}>
<NavLink to={to} className={(nav) => cx("itemcover", { active: nav.isActive })}>
    {children}
</NavLink>
    </div>
}

export default NavItem;