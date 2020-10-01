import NavBar from "../components/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import style from "./layoutNamePage.module.sass";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
interface ILayoutProps {
  children: React.ReactChild;
  pageName: string;
}
export default function NamePageLayout(props: ILayoutProps) {
  const Router = useRouter();
  return (
    <div>
      <div className={style.namePage}>
        <div>
          <FontAwesomeIcon
            width="15px"
            height="15px"
            onClick={() => void Router.back()}
            icon={faArrowLeft}
          />
          <span>{props.pageName}</span>
        </div>
      </div>
      {props.children}
      <NavBar></NavBar>
    </div>
  );
}
