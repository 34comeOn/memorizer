type Tcard = {
    id: number,
    title: string,
    answer: string,
    code?: string,
}

export const dataBase: Tcard[] = [
    {
        id: 1,
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
]