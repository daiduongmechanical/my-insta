import classNames from "classnames/bind";
import style from "./profilePage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faFile,
  faGear,
  faTableCells,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import useUserDataContext from "../../hook/useUserDataContext";

const ProfilePage = () => {
  const cx = classNames.bind(style);
  const { userData } = useUserDataContext();

  return (
    <div className={cx("my_pages")}>
      <div className={cx("my_page")}>
        <div className={cx("avata")}>
          <img src={userData?.avatar} alt="error" />
        </div>

        <div className={cx("info_page")}>
          <div className={cx("edit_page")}>
            <a>{userData?.userName}</a>
            <a className={cx("button")}>Edit personal page</a>
            <a>
              <FontAwesomeIcon icon={faGear} />
            </a>
          </div>
          <div className={cx("follow_page")}>
            <h4>{userData?.posts.length} bài viết</h4>
            <h4>1 người theo dõi</h4>
            <h4>Đang theo dõi 6 người dùng</h4>
          </div>
          <h4 className={cx("name_user")}>Nguyễn Thái Thanh</h4>
        </div>
      </div>

      <p className={cx("hr")}></p>
      <div className={cx("select")}>
        <a href="">
          <FontAwesomeIcon icon={faTableCells} /> Bài Viết
        </a>
        <a href="">
          <FontAwesomeIcon icon={faFile} /> Đã Lưu
        </a>
        <a href="">
          <FontAwesomeIcon icon={faUserFriends} /> Được gắn thẻ
        </a>
      </div>

      <div className={cx("share_image")}>
        <p className={cx("icon_cmr")}>
          <FontAwesomeIcon icon={faCamera} />
        </p>
        <h2>Chia sẻ ảnh</h2>
        <p>Khi bạn chia sẽ ảnh ảnh sẽ hiện lên trang cá nhân của bạn</p>
        <a href="">Chia sẻ ảnh đầu tiên</a>
      </div>
    </div>
  );
};

export default ProfilePage;
