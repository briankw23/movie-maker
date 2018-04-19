const http = require('./movies');
const http2 = require('./categories');
const dom = require('./dom');

const successXhr = function () {
  const dataMovie = JSON.parse(this.responseText).elements;
  console.log(dataMovie);
  dom.movieSet(dataMovie);
};

const failXhr = function () {
  console.log('epic movie fail');
};

const successXhr2 = function () {
  const dataCategory = JSON.parse(this.responseText).categories;
  console.log(dataCategory);
  dom.categorySet(dataCategory);
};

const failXhr2 = function () {
  console.log('epic category fail');
};

const initializer = () => {
  http2(successXhr2,failXhr2);
  http(successXhr,failXhr);
};

module.exports = {
  initializer,
};
