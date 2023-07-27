import classNames from "classnames/bind";
import  style from "./footerLogin.module.scss";


const FooterLogin=()=>{
    const cx:any=classNames.bind(style);

    return (
        <div className={cx("footer_login")}>
            <div className={cx("footer_itemsa")}>
                <div className={cx("item")}>Meta</div>
                <div className={cx("item")}>Giới thiệu</div>
                <div className={cx("item")}>Blog </div>
                <div className={cx("item")}>Việc làm</div>
                <div className={cx("item")}>Trợ giúp</div>
                <div className={cx("item")}>API</div>
                <div className={cx("item")}>Quyền riêng tư</div>
                <div className={cx("item")}>Điều khoản</div>
                <div className={cx("item")}>Tài khoản liên quan nhất</div>
                <div className={cx("item")}>Vị trí</div>
                <div className={cx("item")}>Instagram Lite</div>
                <div className={cx("item")}>Threads</div>
            </div>
            <div className={cx("footer_itemsb")}>
                <div className={cx("item")}>Thông tin liên hệ & người không phải người dùng</div>
                <div className={cx("item")}>Meta đã xác minh</div>
            </div>
            <div className={cx("footer_language")}>
                <span>
                    <div className={cx("language")}>
                        <select className={cx("choice")}>
                            <option>Tiếng việt</option>
                            <option>Tiếng anh</option>
                            <option>Tiếng pháp</option>
                        </select>
                    </div>
                </span>
                <span>@2023 from Meta</span>
            </div>
        </div>)
}


export default FooterLogin;