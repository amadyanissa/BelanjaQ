import NavBar from "../components/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import style from "./layoutNamePage.module.sass";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
interface ILayoutProps {
  children: React.ReactChild;
  pageName: string;
}
export default function NamePageLayout(props: ILayoutProps) {
  const Router = useRouter();
  return (
    <div>
      <div className={style.namePage}>
        <FontAwesomeIcon
          width="15px"
          height="15px"
          onClick={() => void Router.back()}
          icon={faArrowAltCircleLeft}
        />
        <span>{props.pageName}</span>
      </div>
      {props.children}
      <NavBar></NavBar>
    </div>
  );
}
