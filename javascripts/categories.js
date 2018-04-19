const http2 = (successXhr2, failXhr2) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', successXhr2);
  myRequest.addEventListener('error', failXhr2);
  myRequest.open('GET', '../db/categories.json');
  myRequest.send();
};

module.exports = http2;
