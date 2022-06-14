// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
const ingredientsList = document.querySelector('#ingredients')
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];
const oneMoreUl = document.createElement('ul');

ingredients.map(name => {
  const productEl = document.createElement('li');
  productEl.classList.add('item');
  productEl.textContent = name; 
  oneMoreUl.append(productEl);
});
ingredientsList.append(oneMoreUl);
// for (let name of ingredients) {
//   const productEl = document.createElement('li');
//   productEl.classList.add('item');
//   productEl.textContent = name; 
//   ingredientsList.append(productEl);
//   console.log(productEl);
// }
// На видео было показано как создавался виртуальный "ul"
//  и потом это виртуальный 'ul' вешался целиком.В нашем случае
//  ul уже создан. Я не знаю как по-другому сделать это задание.

