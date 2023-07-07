import classNames from "classnames/bind";
import style from "./profilePage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCameraRetro, faCameraRotate, faCircleCheck, faComment, faEllipsis, faFile, faFolder, faGear, faHeart, faSave, faShare, faSmile, faTable, faTableCells, faUserFriends, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const ProfilePage=()=>{

    const cx=classNames.bind(style);


    return(
        <div className={cx("my_pages")}>
            <div className={cx("my_page")}>
                <div className={cx("avata")}>
                    <img src="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/357062908_1140164660706185_2470281605044684794_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=i6AHNqfDl-sAX8bSPyT&_nc_ht=scontent.fhan3-4.fna&oh=00_AfDqjizqapozCXqV0kBGRaahlee5H4Ka0fTdjeurX4yHXQ&oe=64AC8B24"
                    alt="" />
                </div>

                <div className={cx("info_page")}>
                    <div className={cx("edit_page")}>
                        <a>thanhthai638</a>
                        <a className={cx("button")}>Edit personal page</a>
                        <a><FontAwesomeIcon icon={faGear}/></a>
                    </div>
                    <div className={cx("follow_page")}>
                        <h4>0 bài viết</h4>
                        <h4>1 người theo dõi</h4>
                        <h4>Đang theo dõi 6 người dùng</h4>
                    </div>
                    <h4 className={cx("name_user")}>Nguyễn Thái Thanh</h4>
                </div>
            </div>

           <p className={cx("hr")}></p>
            <div className={cx("select")}>
                <a href=""><FontAwesomeIcon icon={faTableCells}/> Bài Viết</a>
                <a href=""><FontAwesomeIcon icon={faFile}/> Đã Lưu</a>
                <a href=""><FontAwesomeIcon icon={faUserFriends}/> Được gắn thẻ</a>
            </div>

            <div className={cx("share_image")}>
                <p className={cx("icon_cmr")}><FontAwesomeIcon icon={faCamera}/></p>
                <h2>Chia sẻ ảnh</h2>
                <p>Khi bạn chia sẽ ảnh ảnh sẽ hiện lên trang cá nhân của bạn</p>
                <a href="">Chia sẻ ảnh đầu tiên</a>
            </div>

        </div>
    );
}

export default ProfilePage;