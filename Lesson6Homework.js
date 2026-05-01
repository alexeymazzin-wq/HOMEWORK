// ДЗ 6.1. Теорія ймовірності
/*
Перевірка теорії ймовірності. 
Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
Приклад функції checkProbabilityTheory(count). 
Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ
    Функція виводить інформацію:
    - Кількість згенерованих чисел: кількість чисел
    - Парних чисел: кількість парних чисел
    - Не парних чисел: кількість не парних чисел
    - Відсоток парних до не парних
*/
"use strict";

// это наша функция, которая будет возвращать всю информацию по условиям задачи
function checkProbabilityTheory(count) {
    // сюда будем складывать случайное число для манипуляций над ним
    let randomNumber = 0;
    // сюда будем общее кол-во чисел складывать
    let totalGeneratedNumbers = 0;
    // сюда будем складывать кол-во парных
    let totalPairedNumbers = 0;
    // сюда будем складывать кол-во непарных
    let totalUnpairedNumbers = 0;
    // сюда - соотношение
    let pairPercentRatio = 0;
    let unpairPercentRatio = 0;

    // это вложенная функция, которая будет выдавать случайное число от 100 до 1000
    function getRandom() {
        let minCount = 100;
        let maxCount = 1000;
        return Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
    };

    // это вложенная функция для определения парности/непарности
    function checkIfPairedNumber(randomNumber) {
        if (randomNumber % 2 === 0) {
            return totalPairedNumbers += 1;
        } else {
            return totalUnpairedNumbers += 1;
        };
    };

    // это вложенная функция для расчета соотношения парных к непарным
    function getPairUnpairPercentRatio(totalPairedNumbers, totalUnpairedNumbers, totalGeneratedNumbers) {
        pairPercentRatio = (totalPairedNumbers / totalGeneratedNumbers) * 100;
        unpairPercentRatio = (totalUnpairedNumbers / totalGeneratedNumbers) * 100;
    };
    // Пытаюсь проверить а не запихивают ли туда чего-то что нам не нужно
    if (isNaN(count)) {
        console.log("Enter Number please.");
    } else if (count == 0) {
        console.log("No point in calculating with 0 count");
        console.log("But anyway, here you go: total Generated Numbers = " + totalGeneratedNumbers);
        console.log("Satisfied? :D");
    } else if (count < 1) {
        console.log("Please give me a number more or equal to 1...T_T");
    } else {
        // в остальных случаях нас все вроде устраивает по count - будем что-то считать значит
        // потому делаем цикл 
        for (let i = 1; i <= count; i++) {
            // каждый цикл генерим числа по-очереди (в кол-ве count)
            randomNumber = getRandom();
            // после генерации добавляем в общую копилку, чтобы посчитать
            totalGeneratedNumbers += 1;
            // вызываем функцию проверки на парность/непарность после каждой рандомизации
            checkIfPairedNumber(randomNumber);
        };
        // после цикла досчитываем процентное соотношение парных и непарных к общему количеству и выводим всю инфу в консоль
        getPairUnpairPercentRatio(totalPairedNumbers, totalUnpairedNumbers, totalGeneratedNumbers);
        // возвращаем посчитанное в цикле:
        console.log("----------------------------");
        console.log("Total Generated Numbers:" + totalGeneratedNumbers);
        console.log("Total Paired Numbers:" + totalPairedNumbers);
        console.log("Total Unpaired Numbers: " + totalUnpairedNumbers);
        console.log("Percent Ratio: Paired = " + pairPercentRatio.toFixed(2) + "% , Unpaired = " + unpairPercentRatio.toFixed(2) + "%");
        console.log("----------------------------");
    };
};

checkProbabilityTheory(1000000);
