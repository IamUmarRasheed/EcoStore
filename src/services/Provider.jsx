import fetcher from "./fetcher";
import { SWRConfig } from "swr";
import React from "react";

function Provider({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher,

        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default Provider;
