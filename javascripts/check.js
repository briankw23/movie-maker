const dom = require('./dom');

let movieStuff = [];
let budget = '';
let cat1 = 0;
let cat2 = 0;
let cat3 = 0;
let cat4 = 0;

const checkedItemEvent = (totalB) => {
  budget = totalB;
  const item = document.getElementsByClassName('chex');
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('change', (e) => {
      if (item[i].checked) {
        addToBudget(e);
      }
      else {
        removeFromBudget(e);
      };
    });
  };
  console.log('budget', budget);
};

const addToBudget = (e) => {
  const checkTarget = e.target.nextSibling.data;
  const checkTargetID = e.target.dataset.id;
  console.log(checkTargetID);
  if (parseInt(checkTargetID) === 1) {
    cat1 += 1;
  } else if (parseInt(checkTargetID) === 2) {
    cat2 += 1;
  } else if (parseInt(checkTargetID) === 3) {
    cat3 += 1;
  } else if (parseInt(checkTargetID) === 4) {
    cat4 += 1;
  };
  progress1();
  console.log('checked target', 'C1', cat1,'C2', cat2,'C3', cat3,'C4', cat4);
  movieStuff = dom.moviesGet();
  let domString = '';
  for (let i = 0; i < movieStuff.length; i++) {
    if (checkTarget === movieStuff[i].name) {
      domString += `<div id="${movieStuff[i].name}">`;
      domString += `<h4 data-id=${movieStuff[i].categoryId}>${movieStuff[i].name}: $${movieStuff[i].cost}</h4>`;
      domString += `</div>`;
      budget -= movieStuff[i].cost;
    };
  };
  addToDom(domString);
  updateBudget(budget);
  budgetColor();
};

const updateBudget = (budget) => {
  const domTarget = document.getElementById('bud');
  domTarget.innerHTML = `<h3 id="num" class="green">$${budget}</h3>`;
  progress1();
};
const budgetColor = () => {
  const color = document.getElementById('num');
  if (budget < 0) {
    color.classList.add('red');
    color.classList.remove('green');
  }
};

const addToDom = (string) => {
  const domTarget = document.getElementById('secondary');
  domTarget.innerHTML += string;
};

const removeFromBudget = (e) => {
  const checkTarget = e.target.nextSibling.data;
  console.log('unchecked target',checkTarget);
  const checkTargetID = e.target.dataset.id;
  if (parseInt(checkTargetID) === 1) {
    cat1 -= 1;
  } else if (parseInt(checkTargetID) === 2) {
    cat2 -= 1;
  } else if (parseInt(checkTargetID) === 3) {
    cat3 -= 1;
  } else if (parseInt(checkTargetID) === 4) {
    cat4 -= 1;
  };
  progress1();
  const removeFromList = document.getElementById(checkTarget);
  removeFromList.remove();
  console.log('unchecked target', 'C1', cat1,'C2', cat2,'C3', cat3,'C4', cat4);
  movieStuff = dom.moviesGet();
  console.log(movieStuff);
  for (let i = 0; i < movieStuff.length; i++) {
    if (checkTarget === movieStuff[i].name) {
      budget += movieStuff[i].cost;
    };
  };
  updateBudget(budget);
};

const progress1 = () => {
  const actors = document.getElementById('actors');
  const animals = document.getElementById('animals');
  const locations = document.getElementById('locations');
  const special = document.getElementById('special');
  if (cat1 >= 1) {
    actors.classList.remove('hide');
  } else {
    actors.classList.add('hide');
  }
  if (cat2 >= 1) {
    animals.classList.remove('hide');
  } else {
    animals.classList.add('hide');
  }
  if (cat3 >= 1) {
    locations.classList.remove('hide');
  } else {
    locations.classList.add('hide');
  }
  if (cat4 >= 1) {
    special.classList.remove('hide');
  } else {
    special.classList.add('hide');
  }
  makeMovie();
};

const makeMovie = () => {
  const color = document.getElementById('num');
  if (cat1 && cat2 && cat3 && cat4 >= 1 && color > 0) {
    const target = document.getElementById('maker');
    target.innerHTML = 'Good news! You can make this movie!';
  }
};

module.exports = checkedItemEvent;
