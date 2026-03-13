/*'const categoriesList = document.querySelector('#categories');
const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});*/

/*constcategories = document.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

for (const category of categories) {
  const title = category.firstElementChild.textContent;
  const elements = category.lastElementChild.children.length;

  console.log('Category:', title);
  console.log('Elements:', elements);
}*/

const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
}