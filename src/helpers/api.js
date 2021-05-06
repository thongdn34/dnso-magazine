import axios from "axios";
const baseURL = "https://dns-be.cyou/";

export const $http = axios.create({
  baseURL,
  timeout: 10000
});

export const $get = async (path, options) => {
  const { data } = await $http.get(path, options);

  return data;
};
