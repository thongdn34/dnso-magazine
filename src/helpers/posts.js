import { endpoint } from "../utils/endpoint";
import { $get } from "./api";

const getPosts = async (params) => {
  const posts = await $get(endpoint.posts, {
    params: {
      ...params,
      _publicationState: "live"
    }
  });

  return posts;
};

const getCount = async (params) => {
  const count = await $get()
}

export { getPosts };
