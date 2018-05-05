let categories = [];
let movieStuff = [];

const categorySet = (dataCategory) => {
  categories = dataCategory;
  console.log(categories);
};

const movieSet = (dataMovie) => {
  movieStuff = dataMovie;
  console.log(movieStuff);
  domOutput();
};

const categoriesGet = () => {
  return categories;
};

const moviesGet = () => {
  return movieStuff;
};

const domOutput = () => {
  let domString = '';
  for (let i = 0; i < categories.length; i++) {
    domString += `<div class=".col-md-8">`;
    domString += `<h3>${categories[i].categoryName}</h3>`;
    domString += `</div>`;
    for (let j = 0; j < movieStuff.length; j++) {
      if (movieStuff[j].categoryId === categories[i].id) {
        domString += `<div class="checkbox">`;
        domString += `<ul class="list-inline">`;
        domString += `<label>`;
        domString += `<input class="chex" type="checkbox" disabled>`;
        domString += `${movieStuff[j].name}`;
        domString += `</label>`;
        domString += `</ul>`;
        domString += `</div>`;
      };
    };
  };
  printToDom(domString);
};

const printToDom = (domString) => {
  const outputDiv = document.getElementById('main');
  outputDiv.innerHTML += domString;
};

module.exports = {
  categorySet,
  movieSet,
  categoriesGet,
  moviesGet,
};
