import { endpoint } from "../utils/endpoint";
import { $get } from "./api";

const getPosts = async (params) => {
  const posts = await $get(endpoint.posts, params);

  return posts;
};

export { getPosts };
