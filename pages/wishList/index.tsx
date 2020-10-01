import { useSelector } from "react-redux";
import MiniProduct from "../../src/components/miniProduct";
import NamePageLayout from "../../src/layout/layoutNamePage";

export default function ProductDetail() {
  const wishlist = useSelector((state) => state.detailProductReducer.wishlist);
  return (
    <NamePageLayout pageName="Wish List">
      <div style={{ margin: "20px 5px 50px 5px" }}>
        {wishlist.map((wishlist) => {
          return (
            <MiniProduct key={wishlist.wishList.id} {...wishlist.wishList} />
          );
        })}
      </div>
    </NamePageLayout>
  );
}
