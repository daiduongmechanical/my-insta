import classNames from "classnames/bind";
import style from "./homePage.module.scss";
import PostItem from "../../component/post";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { postType } from "../../type/postType";

const HomePage = () => {
  const cx: any = classNames.bind(style);
  const [list, setList] = useState<postType[]>([]);
  const [page, setPage] = useState<number>(1);
  const beforePosition = useRef<number>(0);

  useEffect(() => {
    axios
      .get(`https://localhost:7100/api/Post?page=${page}`)
      .then((response) => {
        if (response.status === 200) {
          setList((pre) => [...pre, ...response.data.data]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY - beforePosition.current > 1800) {
        setPage(page + 1);
        beforePosition.current = window.scrollY;
      }
    });

    return window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div className={cx("wrapper__all")}>
      {list.map((e) => (
        <PostItem
          key={e.id}
          url={e.url}
          type={e.type}
          user={e.user}
          content={e.content}
        />
      ))}
    </div>
  );
};

export default HomePage;
