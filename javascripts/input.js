let budget = [];

const getBudget = () => {
  const budgetTarget = document.getElementById('budget');
  budgetTarget.addEventListener('click', setBudget);
};

const setBudget = (e) => {
  console.log(e);
  const budgetTarget = e.target.parentNode.childNodes[1].value;
  budget = budgetTarget * 1;
  console.log(budget);
};

module.exports = getBudget;
