// Задание 2

let x = true;

if (typeof x === 'number') {
  console.log('Это число')
} else if (typeof x === 'string') {
  console.log('Это строка')
} else if (typeof x === 'boolean') {
  console.log('Это логический тип')
} else {
  console.log('Тип х не определен')
}