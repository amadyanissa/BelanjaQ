import { useSelector, useDispatch } from "react-redux";
import NoSearchLayout from "../../src/layout/noSearchLayout";
import { ProductPromo } from "../../types";
import style from "../../styles/productDetail.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faShareSquare,
  faHeart,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";
import { addPurchased } from "../../src/redux/actions/detailProduct";
import useCheckWishList from "../../src/hooks/useCheckWishlist";
import { GetServerSideProps } from "next";
import {
  addWishlist,
  removeWishlist,
} from "../../src/redux/actions/detailProduct";
import { openToast } from "../../src/services/alerts";
import { fetchProcessedMetaTags } from "../../src/assets/productId";
import { WhatsappShareButton } from "react-share";
import { MetaTagsData } from "../../types";
export const config = { amp: "hybrid" };
interface IProductDetailProps {
  query: string;
  metaTags: MetaTagsData;
}
export default function ProductDetail(props: IProductDetailProps) {
  const dispatch = useDispatch();
  const product: ProductPromo = useSelector(
    (state) => state.detailProductReducer.product.product
  );
  const { wished } = useCheckWishList(props.query);
  const Router = useRouter();

  return (
    <NoSearchLayout {...props}>
      <div className={style.productDetail}>
        <div className={style.loveBack}>
          <FontAwesomeIcon
            width="15px"
            height="15px"
            onClick={() => void Router.back()}
            icon={faArrowAltCircleLeft}
          />
          <WhatsappShareButton
            separator={""}
            url={`${props.metaTags.hrefLang["id-id"]}${props.query}`}
          >
            <FontAwesomeIcon
              width="15px"
              height="15px"
              icon={faShareSquare}
            ></FontAwesomeIcon>
          </WhatsappShareButton>
        </div>
        <div className={style.image}>
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className={style.titleLike}>
          <span>{product.title}</span>
          {wished ? (
            <FontAwesomeIcon
              width="15px"
              height="15px"
              onClick={() => {
                dispatch(removeWishlist(product));
                openToast("success", `Removed ${product.title} from wish list`);
              }}
              icon={faHeart}
              style={{ color: "red" }}
            />
          ) : (
            <FontAwesomeIcon
              width="15px"
              height="15px"
              onClick={() => {
                dispatch(addWishlist(product));
                openToast("success", `Added ${product.title} to wish list`);
              }}
              icon={faHeart}
            />
          )}
        </div>
        <div className={style.description}>
          <span>{product.description}</span>
          <div className={style.priceBuy}>
            <span>{product.price}</span>
            <button
              onClick={() => {
                dispatch(addPurchased(product));
                openToast("success", `You Bought ${product.title}!`);
              }}
              className={style.buy}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </NoSearchLayout>
  );
}

export const getServerSideProps: GetServerSideProps<IProductDetailProps> = async (
  ctx
) => {
  const query = String(ctx.query.productId) || "";

  return {
    props: {
      query,
      metaTags: fetchProcessedMetaTags(),
    },
  };
};
