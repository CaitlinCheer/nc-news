export function getLikesCount(articleId, defaultCount) {
  const savedLikesCount = localStorage.getItem(`likesCount-${articleId}`);
  return savedLikesCount ? parseInt(savedLikesCount, 10) : defaultCount;
}
export function getIsLiked(articleId) {
  const savedIsLiked = localStorage.getItem(`isLiked-${articleId}`);
  return savedIsLiked === "true";
}
export function setLikesCount(articleId, count) {
  localStorage.setItem(`likesCount-${articleId}`, count);
}
export function setIsLiked(articleId, isLiked) {
  localStorage.setItem(`isLiked-${articleId}`, isLiked);
}
