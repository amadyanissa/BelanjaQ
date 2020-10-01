import style from "./header.module.sass";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import useSearch from "../hooks/useSearch";
interface IHeaderProps {
  search?: string;
  onChange?: (string) => void;
}
export default function Header(props: IHeaderProps) {
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef(null);
  const Router = useRouter();
  const handleSubmit = () => {
    void Router.push(`/search/${search}`, undefined, { shallow: false });
  };
  const { setSearchHook } = useSearch({ search });
  useEffect(() => {
    setSearchHook(search);
  }, [search]);
  useEffect(() => {
    setSearch(props?.search);
  }, [props?.search]);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={style.headerContainer}>
      <FontAwesomeIcon
        color={"#f49f1e"}
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
              props.onChange(e.target.value);
            }}
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
