export type Tcard = {
    id: number,   
    repeatedTimeStamp: number | null,
    timesBeenRepeated: number,
    title: string,
    answer: string,
    code?: string,
}

export const dataBase: Tcard[] = [
    {
        id: 1,
        repeatedTimeStamp: 1671428196316,  
        timesBeenRepeated: 0,      
        title: 'Что такое this?',
        answer: 'Ключевое слово this - это контекст вызова или ссылка на значение объекта, который в данный момент выполняет или вызывает функцию. Поэтому this может принимать абсолютно разные значения. Это может быть Глобальный объект, или объявленный, или объект события. То есть this способен меняться в соответствии от контекста выполнения. Из-за такой неопределенности возможна потеря функцией контекста вызова',
        code: `function getName() {
                return this.name
               }
               var name = 'Mikl'
               getName()       // Mikl
        
               const obj = {name: 'Sasha'}
               getName.call(obj)            // Sasha
        
               const obj666 = {
                name: 'Vlad',
                getName() {
                 return this.name;
                }
               }
               obj666.getName()             // Vlad`   
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
        repeatedTimeStamp: 1671428100000,  
        timesBeenRepeated: 3,      
        title: 'Что такое React?',
        answer: 'React - это',
    },    
]

export const repeatNowArray: Tcard[] = [];
export const repeatInHourArray: Tcard[] = [];
export const repeatIn4HoursArray: Tcard[] = [];
export const repeatIn8HoursArray: Tcard[] = [];
export const repeatIn12HoursArray: Tcard[] = [];
export const repeatIn24HoursArray: Tcard[] = [];
export const repeatIn3DaysArray: Tcard[] = [];
const lastRepeatedTime = 1671428196316;
const currentDate = Date.now();
const timeSinceRepeat = currentDate - lastRepeatedTime
console.log(timeSinceRepeat)
console.log(`Seconds ${Math.floor(timeSinceRepeat/ 1000)}`)
console.log(`Minutes ${Math.floor(timeSinceRepeat/ (1000*60))}`)
console.log(`Hours ${Math.floor(timeSinceRepeat/ (1000*60*60))}`)

const getHoursSinceRepeat = (repeatedTimeStamp: number | null ) => {
    if (repeatedTimeStamp) {
        const timeSinceRepeat = Date.now() - repeatedTimeStamp;
        return Math.floor(timeSinceRepeat/ (1000*60*60));
    }

    return false;
}

const spreadCards = (dataBase: Tcard[]) => {
    for (let card of dataBase) {
        switch (card.timesBeenRepeated) {
            case 0:
                repeatNowArray.push(card);
                break;
            case 1:
                (getHoursSinceRepeat(card.repeatedTimeStamp) < 2) ? repeatInHourArray.push(card) : repeatNowArray.push(card);
                break;
            case 2:
                (getHoursSinceRepeat(card.repeatedTimeStamp) < 5) ? repeatIn4HoursArray.push(card) : repeatInHourArray.push(card); 
                break;
            default:
                repeatNowArray.push(card);
        }
    }
}

spreadCards(dataBase);