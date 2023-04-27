let number = parseInt(prompt("Введіть ціле число:"));

if (isNaN(number)) {
    alert("Ви ввели неправильне значення!");
} else if (number % 2 === 0) {
    alert("Введене число є парним.");
} else {
    alert("Введене число є непарним.");
}

// 1 


// 

for (var i = 0; i < 6; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.write('<div style="background-color:' + rgb + '; display: inline-block; width: 200px; height: 100px; margin: 10px;"></div>');

    // Додаємо розділювач після 3-го блоку
    if ((i + 1) % 3 == 0) {
        document.write('<br>');
    }
}



// 2.1

// // Генеруємо випадкову кількість блоків від 6 до 10 включно
// const numOfBlocks = Math.floor(Math.random() * 5) + 6;

// // Встановлюємо висоту сторінки на висоту вікна браузера
// document.documentElement.style.height = "100%";

// // Використовуємо цикл для створення HTML-коду блоків
// for (let i = 1; i <= numOfBlocks; i++) {
//     document.write(`<div class="block"></div>`);
// }

// // Встановлюємо CSS-стилі для блоків
// const blockStyle = `
//   display: inline-block
 
//   width: 2px;
//   height: 100vh;
//   background-color: #ccc;
//   border: 1px solid #000;
//   margin: 0 10px;
// `;

// // Використовуємо CSS-селектор, щоб встановити стилі для блоків
// document.styleSheets[0].insertRule(`.block {${blockStyle}}`, 0);

let count = Math.floor(Math.random() * 5) + 6;

document.write("<div class='container'>");

for (let i = 0; i < count; i++) {
    document.write("<div class='block'></div>");
}

document.write("</div>");

// 3 
// Створення масиву з даними про товари
let products = [
    { code: '001', name: 'Ноутбук', price: 15000, quantity: 2 },
    { code: '002', name: 'Смартфон', price: 8000, quantity: 4 },
    { code: '003', name: 'Телевізор', price: 20000, quantity: 1 },
    { code: '004', name: 'Планшет', price: 12000, quantity: 3 },
    { code: '005', name: 'Камера', price: 10000, quantity: 2 },
];

// Створення таблиці та її наповнення даними з масиву
let table = '<table>';
table += '<tr><th>Код</th><th>Найменування</th><th>Ціна</th><th>Кількість</th><th>Сума за товар</th></tr>';
let total = 0;
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let sum = product.price * product.quantity;
    total += sum;
    table += `<tr><td>${product.code}</td><td>${product.name}</td><td>${product.price}</td><td>${product.quantity}</td><td>${sum}</td></tr>`;
}
table += `<tr><td colspan="4">Всього:</td><td>${total}</td></tr>`;
table += '</table>';

// Виведення таблиці на екран
document.write(table);
