import { useSelector } from "react-redux";
import Layout from "../../src/layout/layout";
import { GetServerSideProps } from "next";
import MiniProduct from "../../src/components/miniProduct";
import { useEffect, useState } from "react";
interface ISearchProps {
  query: string;
}
export default function Search(props: ISearchProps) {
  const search = useSelector((state) => state.detailProductReducer.rawData);
  const result = search[0].filter((search) => {
    return search.title.toLowerCase().includes(props.query);
  });
  const [input, setInput] = useState("");
  useEffect(() => {
    setInput(props.query);
  }, [props.query]);
  return (
    <Layout search={input}>
      {result.map((result) => {
        return <MiniProduct key={result.id} {...result} />;
      })}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ISearchProps> = async (
  ctx
) => {
  const query = String(ctx.query.value) || "";

  return {
    props: {
      query,
    },
  };
};
