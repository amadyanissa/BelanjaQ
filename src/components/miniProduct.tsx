import { ProductPromo } from "../../types";
import style from "./miniProduct.module.sass";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setProduct } from "../../src/redux/actions/detailProduct";

export default function MiniProduct(props: ProductPromo) {
  const dispatch = useDispatch();
  const Router = useRouter();
  return (
    <div
      onClick={() => {
        dispatch(setProduct(props));
        setTimeout(() => {
          void Router.push(`/product/${props.id}`, undefined, {
            shallow: true,
          });
        }, 300);
      }}
      className={style.miniProduct}
    >
      <img alt={props.title} src={props.imageUrl} />
      <div className={style.info}>
        <div>
          <span>{props.title}</span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span>{props.price}</span>
        </div>
      </div>
    </div>
  );
}
