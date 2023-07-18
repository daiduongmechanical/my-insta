import classNames from "classnames/bind";
import  Style  from "./suggestItem.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { spawn } from "child_process";

const SuggestItem=({big,comment}:any)=>{

    const cx=classNames.bind(Style)

return( <div className={cx("wrapper",{big})}>
    <img src="https://media.istockphoto.com/id/833281682/vector/cartoon-funny-monster-face-vector-halloween-blue-monster-avatar-with-wide-smile.jpg?s=612x612&w=0&k=20&c=ZGthTYDKLkh8B21XUV6lw8J6VuOhE_zyMH_bKUPXBes=" alt="error"  className={cx("avatar")}/>
    <div className={cx("info")}>
        <div className={cx("info--data")}>
            <b>name</b>
            {comment && <p>comment</p>}
            {!comment && <span>Suggest for you</span>}
        </div>
        <div className={cx("time")}>
            {comment && <b>12 phut</b>}
            {comment && <p>tra loi</p>}
        </div>
    </div>

    <div className={cx("heart")}>
        <p>{comment &&<FontAwesomeIcon icon={faHeart}/>}</p>
    </div>
</div>)
}

export default SuggestItem;
