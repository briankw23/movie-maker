const dom = require('./dom');

let budget = '';

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

let movieStuff = [];

const addToBudget = (e) => {
  const checkTarget = e.target.nextSibling.data;
  console.log('checked target',checkTarget);
  movieStuff = dom.moviesGet();
  console.log(movieStuff);
  let domString = '';
  for (let i = 0; i < movieStuff.length; i++) {
    if (checkTarget === movieStuff[i].name) {
      domString += `<div>`;
      domString += `<h4>${movieStuff[i].name}: $${movieStuff[i].cost}</h4>`;
      domString += `</div>`;
      budget -= movieStuff[i].cost;
    };
  };
  addToDom(domString);
  updateBudget(budget);
};

const updateBudget = (budget) => {
  const domTarget = document.getElementById('bud');
  domTarget.innerHTML = `<h3 class="green">$${budget}</h3>`;
};

const addToDom = (string) => {
  const domTarget = document.getElementById('secondary');
  domTarget.innerHTML += string;
};

const removeFromBudget = (e) => {
  const checkTarget = e.target.nextSibling.data;
  console.log('unchecked target', checkTarget);
};

module.exports = checkedItemEvent;
