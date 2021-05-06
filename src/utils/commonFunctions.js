import { baseURL } from "./constants";
import moment from "moment";

function mostViewSort(data) {
  let initial = 0;
  let secondFirst = Math.floor(data.length / 2) - 1;
  let results = [];
  data.forEach((item, i) => {
    if (i % 2) {
      secondFirst += 1;
      results.push({ ...data[secondFirst], id: secondFirst + 1 });
    } else {
      initial += 1;
      results.push({ ...data[initial], id: initial });
    }
  });
  return results;
}

const convertDate = (date) => new moment(date).format("dddd MM YYYY");
const sortDateArray = (array) =>
  array.sort((d1, d2) => new moment(d2.updated_at) - new moment(d1.updated_at));
const addingImgPrefix = (url) => `${baseURL}${url}`;

export { mostViewSort, convertDate, addingImgPrefix, sortDateArray };
