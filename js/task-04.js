// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const plusButton = document.querySelector('[data-action="increment"]')
const minusButton = document.querySelector('[data-action="decrement"]')
const valueNumber = document.querySelector('#value')
let counterValue = 0;
plusButton.addEventListener('click',()=>{
    counterValue += 1
    valueNumber.textContent = counterValue;
});
minusButton.addEventListener('click',()=>{
    counterValue -= 1
    valueNumber.textContent = counterValue;
});