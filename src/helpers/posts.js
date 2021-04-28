import { endpoint } from "../utils/endpoint";
import { $get } from "./api";

const getPosts = async () => {
  const posts = await $get(endpoint.posts);

  return posts;
};

export { getPosts };
