import style from "./navBar.module.sass";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faNewspaper,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  const Router = useRouter();
  return (
    <div className={style.nav}>
      <div
        onClick={() => {
          void Router.push("/", undefined, { shallow: true });
        }}
        className={style.panel}
      >
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </div>
      <div
        onClick={() => {
          void Router.push("/", undefined, { shallow: true });
        }}
        className={style.panel}
      >
        <FontAwesomeIcon icon={faNewspaper} />
        <span>Feed</span>
      </div>
      <div
        onClick={() => {
          void Router.push("/history", undefined, { shallow: true });
        }}
        className={style.panel}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Cart</span>
      </div>
      <div
        onClick={() => {
          void Router.push("/wishList", undefined, { shallow: true });
        }}
        className={style.panel}
      >
        <FontAwesomeIcon icon={faUser} />
        <span>Profile</span>
      </div>
    </div>
  );
}
