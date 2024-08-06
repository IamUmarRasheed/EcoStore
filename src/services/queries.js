import useSWR from "swr";

export function useProducts() {
  // console.log(pageIndex,'inquries')
  const { data, error } = useSWR(`/products`, {
    revalidateOnFocus: false, // Disable refetch on window focus
    revalidateOnReconnect: false, // Disable refetch on network reconnect
  });
  // Add the missing closing parenthesis

  console.log("Data:", data);

  

  return { data, error };
}


