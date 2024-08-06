import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const fetcher = (url) => {
  return axiosInstance.get(url).then((res) => res.data);
};

export default fetcher;
