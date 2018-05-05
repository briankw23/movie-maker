let budget = [];

const getBudget = () => {
  const budgetTarget = document.getElementById('budget');
  budgetTarget.addEventListener('click', setBudget);
};

const setBudget = (e) => {
  console.log(e);
  const budgetAmount = e.target.parentNode.childNodes[1].value;
  budget = budgetAmount * 1;
  console.log(budget);
  disable();
};

const disable = () => {
  const inputs = document.getElementsByClassName('chex');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  };
};

module.exports = getBudget;
