import { useSelector } from "react-redux";
import MiniProduct from "../../src/components/miniProduct";
import NamePageLayout from "../../src/layout/layoutNamePage";

export default function ProductDetail() {
  const purchased = useSelector(
    (state) => state.detailProductReducer.purchased
  );
  return (
    <NamePageLayout pageName="Purchase History">
      <div style={{ margin: "20px 5px 50px 5px" }}>
        {purchased.map((purchased) => {
          return (
            <MiniProduct
              key={purchased.purchased.id}
              {...purchased.purchased}
            />
          );
        })}
      </div>
    </NamePageLayout>
  );
}
