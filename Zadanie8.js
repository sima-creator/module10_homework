// Задание 8

let myMap = new Map();
myMap.set('Name' , 'Ivan');
myMap.set('Surname' , 'Ivanov');
myMap.set('Age' , 35);

for (let [key, values] of myMap) {
    console.log('Ключ - ' + key + ', значение ' + values)
}