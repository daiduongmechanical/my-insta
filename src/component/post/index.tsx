import classNames from "classnames/bind";
import Style from "../post/post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

import CreateComment from "../create_comment";
import EllipsisPage from "../ellipsis";
import LoveIttemPage from "../loveItem";
import { UserType } from "../../type/userType";

interface IPostProps {
  url: string;
  type: string;
  user: UserType;
  content: string;
}

const PostItem: React.FC<IPostProps> = ({ url, type, user, content }) => {
  const cx = classNames.bind(Style);
  const videoRef: any = useRef<HTMLVideoElement>(null);
  const [loveItem, setLoveItem] = useState(false);
  const [ellip, setEllip] = useState(false);
  useEffect(() => {
    if (type === "video") {
      console.log("hello world!");
      const isInViewport = (): boolean => {
        const rect = videoRef.current.getBoundingClientRect();
        return rect?.top >= -405 && rect?.bottom <= 900;
      };

      const handleScroll = () => {
        isInViewport() ? videoRef.current.play() : videoRef.current.pause();
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleClose = (data: boolean) => setEllip(data);
  const loveItemClose = (data: boolean) => setLoveItem(data);

  return (
    <div className={cx("wrapper__all")}>
      <div className={cx("wrapper")}>
        <div className={cx("cart")}>
          <div className={cx("info")}>
            <img src={user.avatar} alt="error" />
            <div className={cx("name")}>
              <p>{user.userName}</p>
              <span>{user.fullName}</span>
            </div>
            <p className={cx("icon_star")} onClick={() => setLoveItem(true)}>
              🌟
            </p>
            <p className={cx("icon_ellipsis")} onClick={() => setEllip(true)}>
              <FontAwesomeIcon icon={faEllipsis} />
            </p>
          </div>
          <p>{content}</p>
          <div className={cx("video")}>
            {type === "video" && (
              <video controls ref={videoRef}>
                <source src={url} type="video/mp4" />
              </video>
            )}

            {type === "image" && (
              <img className={cx("image__post")} src={url} alt="error" />
            )}
          </div>
          <div className={cx("action_wrapper")}>
            <div className={cx("create_CommentPage")}>
              <CreateComment url={url} view />
            </div>
            <div className={cx("ellipsisPage")}>
              {ellip && <EllipsisPage closeModel={handleClose} />}
            </div>
            <div className={cx("loveItemPage")}>
              {loveItem && <LoveIttemPage closeModel={loveItemClose} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
