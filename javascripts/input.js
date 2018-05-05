const check = require('./check');

let budget = [];

const budgetEvent = () => {
  const budgetTarget = document.getElementById('budget');
  budgetTarget.addEventListener('click', stuffBudget);
};

const stuffBudget = (e) => {
  console.log(e);
  const budgetAmount = e.target.parentNode.childNodes[1].value;
  budget = budgetAmount * 1;
  console.log(budget);
  e.target.parentNode.childNodes[3].setAttribute('disabled', 'disabled');
  e.target.parentNode.classList.add('disabled');
  e.target.parentNode.childNodes[1].disabled = true;
  disable();
};

const disable = () => {
  const inputs = document.getElementsByClassName('chex');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  };
  check();
};

module.exports = budgetEvent;
