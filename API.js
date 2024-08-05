import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-74y2.onrender.com/api",
});

export function getAllArticles() {
  return api
    .get("/articles")
    .then(({ data }) => {
        
      return data.articles;
    })
    .catch((err) => {
      console.log(err, "No data found");
    });
}