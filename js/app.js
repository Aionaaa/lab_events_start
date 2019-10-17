document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const save = document.querySelector('#new-item-form');
  save.addEventListener('submit', handleFormSubmit)

  // const removeNewItem = document.querySelector('#reading-list');
  // removeNewItem.addEventListener('submit', handleRemove)
})


const handleFormSubmit = function(event) {
  event.preventDefault();
  const readingList = document.querySelector('#reading-list');
  const newItem = document.createElement("div");
  const newAuthor = document.createElement("p");
  newAuthor.textContent = `Author: ${event.target.author.value}`
  const newTitle = document.createElement("p");
  newTitle.textContent = `Title: ${event.target.title.value}`
  const newCategory = document.createElement("p")
  newCategory.textContent = `Category: ${event.target.category.value}`
  newItem.appendChild(newAuthor);
  newItem.appendChild(newTitle);
  newItem.appendChild(newCategory);
  readingList.appendChild(newItem);
  document.getElementById("new-item-form").reset();
};


// const handleRemove = function(event) {
//   newItem.appendChild(handleRemove);
//   newItem.textContent = `Remove ${event.target}`
//   newItem.remove()
};
