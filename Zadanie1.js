// Задание 1 

const x = +prompt('Введите число');

if (isNaN(x) || typeof(x) !== 'number') {
  console.log(alert('Упс, кажется вы ошиблись'))
} else if (x % 2 === 0) {
  console.log(alert('Это четное число'));
} else {
  console.log(alert('Это нечетное число'))
}