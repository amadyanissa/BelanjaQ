import { MetaTagsData } from "../../types";
import NavBar from "../components/navBar";
import MetaTags from "../../src/services/metaTagProcess";
interface ILayoutProps {
  children: React.ReactChild;
  metaTags?: MetaTagsData;
}
export default function NoSearchLayout(props: ILayoutProps) {
  return (
    <div>
      <MetaTags {...props.metaTags} currentURL=""></MetaTags>
      {props.children}
      <NavBar></NavBar>
    </div>
  );
}
