function convertDomain (url) {
  let domain = url.replace("http://", "")
  .replace("https://", "")
  .replace(/www\d?./i, "")
  .split(/[/?#]/)[0];

  return domain.trim();
}