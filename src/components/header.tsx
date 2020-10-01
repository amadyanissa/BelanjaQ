import style from "./header.module.sass";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
interface IHeaderProps {
  search?: string;
}
export default function Header(props: IHeaderProps) {
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef(null);
  const Router = useRouter();
  const handleSubmit = () => {
    void Router.push(`/search/${search}`, undefined, { shallow: false });
  };
  useEffect(() => {
    setSearch(props?.search);
  }, [props?.search]);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className={style.headerContainer}>
      <FontAwesomeIcon
        width="15px"
        height="15px"
        onClick={() => {
          void Router.push("/wishList", undefined, { shallow: true });
        }}
        style={{ height: "100%" }}
        icon={faHeart}
      ></FontAwesomeIcon>
      <div className={style.search}>
        <img alt="seacrh" src="/assets/search.svg"></img>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            ref={inputRef}
            defaultValue={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
