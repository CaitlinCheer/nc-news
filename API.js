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

export function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export function getCommentsByArticleId(article_id) {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    console.log(data.articleComments)
    return data.articleComments;
  });
}
