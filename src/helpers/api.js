import axios from "axios";

export const $http = axios.create({
  baseURL: "http://188.166.225.4:1337",
  timeout: 10000
});

export const $get = async (path, options) => {
  const { data } = await $http.get(path, options);

  return data;
}
