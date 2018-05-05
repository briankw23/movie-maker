const checkedItemEvent = () => {
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
};

const addToBudget = (e) => {
  const checkTarget = e.target.nextSibling.data;
  console.log('checked target',checkTarget);
};

const removeFromBudget = (e) => {
  const checkTarget = e.target.nextSibling.data;
  console.log('unchecked target', checkTarget);
};

module.exports = checkedItemEvent;
