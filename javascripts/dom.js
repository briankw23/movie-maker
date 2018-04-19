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

const domOutput = () => {
  let domString = '';
  for (let i = 0; i < categories.length; i++) {
    domString += `<div>`;
    domString += `<h1>${categories[i].categoryName}</h1>`;
    for (let j = 0; j < movieStuff.length; j++) {
      if (movieStuff[i].id === categories[i].id) {
        domString += `${movieStuff[i].name}`;
        domString += `</div>`;
      };
    };
  };console.log(domString);
  printToDom(domString);
};

const printToDom = (domString) => {
  const outputDiv = document.getElementById('main');
  outputDiv.innerHTML += domString;
};

module.exports = {
  categorySet,
  movieSet,
};