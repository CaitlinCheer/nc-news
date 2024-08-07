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
export function patchLikesByArticle(article_id, vote) {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.article;
    });
}

export function getCommentsByArticleId(article_id) {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.articleComments;
  });
}
export function addCommentOnArticle(article_id, comment) {
  return api
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data;
    });
}
export function deleteCommentById(comment_id) {
  console.log(comment_id)
  return api.delete(`/comments/${comment_id}`);
}
