import { useEffect, useState } from "react";
interface IUseSearchParams {
  search?: string;
}
export default function useSearch(params: IUseSearchParams) {
  const [searchHook, setSearchHook] = useState("");
  useEffect(() => {
    if (params?.search !== "") setSearchHook(params?.search);
  }, [params?.search]);

  return { searchHook, setSearchHook };
}
