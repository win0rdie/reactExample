// import axios from "axios";

// axios.defaults.baseURL = "http://hn.algolia.com/api/v1/";

// // console.log("URL", process.env.REACT_APP_API_URL);

// export const getArticles = async ({ query = "", hitsPerPage = 10 } = {}) => {
//   const response = await axios.get("search", {
//     params: {
//       query,
//       //   query: "angular",
//   // hitsPerPage: 30,
//       hitsPerPage,

//     },
//   });
//   return response.data.hits;
// };

const URL = "http://hn.algolia.com/api/v1/";

export const fetchArticles = async (params = {}) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach((param) => query.append(param[0], param[1]));
  const response = await fetch(`${URL}search?${query}`, {
    method: "GET",
  });

  const data = await response.json();
  return data.hits;
};
