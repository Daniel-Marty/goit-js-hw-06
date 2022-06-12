const allItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allItems.length}`);

for (let item of allItems) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const countItems = item.querySelectorAll('li');
    console.log(`Elements ${countItems.length}`);
}