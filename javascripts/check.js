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
        console.log('item checked', e);
        addToBudget(e);
      }
      else {
        console.log('item uncheck', e);
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
  progress2();
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
  if (cat1 >= 1) {
    const actors = document.getElementById('actors');
    actors.classList.remove('hide');
  } else if (cat2 >= 1) {
    const animals = document.getElementById('animals');
    animals.classList.remove('hide');
  } else if (cat3 >= 1) {
    const locations = document.getElementById('locations');
    locations.classList.remove('hide');
  } else if (cat4 >= 1) {
    const special = document.getElementById('special');
    special.classList.remove('hide');
  }
};

const progress2 = () => {
  if (cat1 <= 0) {
    const actors = document.getElementById('actors');
    actors.classList.add('hide');
  } else if (cat2 <= 0) {
    const animals = document.getElementById('animals');
    animals.classList.add('hide');
  } else if (cat3 <= 0) {
    const locations = document.getElementById('locations');
    locations.classList.add('hide');
  } else if (cat4 <= 0) {
    const special = document.getElementById('special');
    special.classList.add('hide');
  }
};

module.exports = checkedItemEvent;
