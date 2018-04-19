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
    domString += `<h3>${categories[i].categoryName}</h3>`;
    domString += `</div>`;
    domString += `<div class=".col-md-4">`;
    for (let j = 0; j < movieStuff.length; j++) {
      if (movieStuff[j].categoryId === categories[i].id) {
        domString += `<div class="checkbox disabled">`;
        domString += `<label>`;
        domString += `<input type="checkbox" value="" disabled>`;
        domString += `${movieStuff[j].name}`;
        domString += `</label>`;
        domString += `</div>`;
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
