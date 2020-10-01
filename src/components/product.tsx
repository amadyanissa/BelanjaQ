import { ProductPromo } from "../../types";
import style from "./product.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addWishlist, removeWishlist } from "../redux/actions/detailProduct";
import { useRouter } from "next/router";
import useCheckWishList from "../hooks/useCheckWishlist";
import { openToast } from "../../src/services/alerts";

interface IProductProps {
  product: ProductPromo;
}
export default function Product(props: IProductProps) {
  const dispatch = useDispatch();
  const Router = useRouter();
  const { wished } = useCheckWishList(props.product.id);
  return (
    <>
      <div className={style.product}>
        <div
          onClick={() =>
            void Router.push(`/product/${props.product.id}`, undefined, {
              shallow: true,
            })
          }
        >
          <img src={props.product?.imageUrl} alt={props.product?.title}></img>
        </div>
        {wished ? (
          <FontAwesomeIcon
            width="15px"
            height="15px"
            onClick={() => {
              dispatch(removeWishlist(props.product));
              openToast(
                "success",
                `Removed ${props.product.title} from wishlist`
              );
            }}
            style={{ position: "relative", left: "-161px", color: "red" }}
            icon={heart}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            width="15px"
            height="15px"
            onClick={() => {
              dispatch(addWishlist(props.product));
              openToast("success", `Added ${props.product.title} to wishlist`);
            }}
            style={{ position: "relative", left: "-161px" }}
            icon={faHeart}
          ></FontAwesomeIcon>
        )}
      </div>
      <span className={style.name}>{props.product.title}</span>
    </>
  );
}
