const http = (successXhr, failXhr) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', successXhr);
  myRequest.addEventListener('error', failXhr);
  myRequest.open('GET', '../db/movie.json');
  myRequest.send();
};

module.exports = http;
