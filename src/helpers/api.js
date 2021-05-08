import axios from "axios";
import { baseURL } from "../utils/constants";

export const $http = axios.create({
  baseURL: baseURL,
  timeout: 10000
});

export const $get = async (path, options) => {
  const { data } = await $http.get(path, options);

  return data;
};
