// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн
//     - стиль span#text обновляя свойство font - size.
//     В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.getElementById('font-size-control')
const textEl = document.getElementById('text')

inputEl.addEventListener('input', onChangeFontSize);
function onChangeFontSize(event) {
    textEl.style.fontSize = event.currentTarget.value+"px";
}