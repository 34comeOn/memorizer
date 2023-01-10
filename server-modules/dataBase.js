const dataBase = JSON.stringify([
    {
        id: 1,
        repeatedTimeStamp: 1671428196316,  
        timesBeenRepeated: 0,      
        title: 'Что такое this?',
        answer: 'Ключевое слово this - это контекст вызова или ссылка на значение объекта, который в данный момент выполняет или вызывает функцию. Поэтому this может принимать абсолютно разные значения. Это может быть Глобальный объект, или объявленный, или объект события. То есть this способен меняться в соответствии от контекста выполнения. Из-за такой неопределенности возможна потеря функцией контекста вызова',
    },    
    {
        id: 2,
        repeatedTimeStamp: 1671428100000,  
        timesBeenRepeated: 1,      
        title: 'Что такое Замыкание?',
        answer: 'Замыкание - это',
    },    
    {
        id: 3,
        repeatedTimeStamp: 1673354018170,  
        timesBeenRepeated: 3,      
        title: 'Что такое React?',
        answer: 'React - это',
    },    
]);

module.exports = dataBase;