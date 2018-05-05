const checkedItemEvent = () => {
  const item = document.getElementsByClassName('chex');
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('change', (e) => {
      if (item[i].checked) {
        console.log('item checked', e);
      }
      else {
        console.log('item uncheck', e);
      };
    });
  };
};

// const addCheckBoxEventLarge = () => {
//   checkbox.addEventListener('change', (e) => {
//     const messagesBody = document.getElementById('messages');
//     if (e.target.checked) {
//       messagesBody.classList.add('largeMarge');
//     }
//     else {
//       messagesBody.classList.remove('largeMarge');
//     }
//   });
// };

module.exports = checkedItemEvent;
