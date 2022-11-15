# module7_homework

Задание 1.
Написать функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.

Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
План:
    Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
    Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
    У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
    Создайте экземпляры каждого прибора.
    Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
Общие требования:
        Имена функций, свойств и методов должны быть информативными
        Соблюдайте best practices:
                использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
                информативные имена (а не a, b);
                четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
                использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
                
Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
    Имена классов, свойств и методов должны быть информативными;
    Соблюдать best practices;
    Использовать синтаксис ES6.
