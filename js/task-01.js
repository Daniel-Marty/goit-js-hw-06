const allItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allItems.length}`);


allItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    // const countItems = item.querySelectorAll('li');
    const countItems = item.lastElementChild.children;
        
    console.log(`Elements ${countItems.length}`);
});

