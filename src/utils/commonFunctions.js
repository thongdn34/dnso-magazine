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

const convertPath = (title, id) => {
  const regex = /[^A-Za-z0-9]/g;
  let path = `${title.replace(regex, "")}-${id}`;
  return path.replace(" ", "-");
};

const formatDataPosts = (data) => {
  return sortDateArray(
    data.reduce((acc, curr) => {
      return [
        ...acc,
        {
          id: curr?.id,
          photo:
            curr?.thumbnail.formats.medium?.url ||
            curr?.thumbnail.formats.thumbnail?.url,
          caption: curr?.thumbnail?.caption,
          title: curr?.title,
          description: curr?.subDescription || curr?.subDescrtiption,
          view: curr.view,
          share: curr.share,
          category: curr?.category.translatedName,
          updateAt: convertDate(curr?.updated_at)
        }
      ];
    }, [])
  );
};

export { mostViewSort, convertDate, sortDateArray, convertPath, formatDataPosts };
