import { strict } from 'assert';

console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

///
// function Test (name, age) {
//     this.name = name;
//     this.age = age;
//     return {Yo: 'Yo'};
// }
//
// console.log(new Test('Evgen', 33));

///

// type TestType = {
//     name: string,
//     age: number,
// }
//
// function Test(this: TestType, name: string, age: number) {
//     this.name = name;
//     this.age = age;
// }
//
// console.log(new (Test as any)('Evgen', 33));

// console.dir(function () {})
// console.dir(class Test {})

// class Test {
//     name: string;
//     age: number;
//     //sayHi: Function;
//
//     constructor( name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         //this.sayHi = function() {}
//     }
//
//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     }
//
//     sayBy = () => {}
// }
//
// let testObj = new Test('Evgen', 33);
// //testObj.sayHi();
//
// class Test2 extends Test {
//     city: string;
//
//     constructor(name: string, age: number, city: string) {
//         super(name, age); // this = super(name, age)
//         this.city = city;
//     }
//
//     sayHi() {
//         console.log('This is child method');
//         super.sayHi();
//     }
// }
//
// let testObj2 = new Test2('Evgen', 33, 'Minsk');
// testObj2.sayHi();

// interface IPerson {
//     name: string,
//     age: number,
//     sayHi: Function,
// }
//
// interface IPersonCity {
//     name: string,
//     city: string
// }
//
// class BasePerson implements IPerson, IPersonCity {
//     name: string;
//     age: number;
//     sayHi: Function;
//     city: string;
//
//     constructor( name: string, age: number, city: string) {
//         this.name = name;
//         this.age = age;
//         this.sayHi = function () {};
//         this.city = city;
//     }
//     //sayHi() {}
//
//     sayBye() {
//
//     }
// }


// class BasePerson {
//     #testParam = 10;
//
//     constructor( name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayHi() {
//         console.log(this.#testParam);
//         this.#sayYo();
//     }
//
//     #sayYo() {
//         console.log('YoYoYo');
//     }
// }
//
// let obj = new BasePerson('Y', 10);
// obj.sayHi();
// //console.log(obj.#testParam);
// //obj.#sayYo();


// interface IPerson {
//     name: string,
//     age: number,
//     sayHi: Function,
// }

// class BasePerson implements IPerson {
//
//     private testParam = 10;
//
//     constructor( public name: string, public age: number) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayHi() {
//
//     }
// }
//
// let testObj = new BasePerson('Yo', 10);
// console.log(testObj);
// //@ts-ignore
// console.log(testObj.testParam);



// class BasePerson implements IPerson {
//
//     static testParam = 10;
//
//     constructor( public name: string, public age: number) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayHi() {
//
//     }
//
//     static sayBy() {
//         this.testParam;
//     }
// }
//
// let testObj = new BasePerson('Yo', 10);
// console.log(testObj);
// console.dir(BasePerson);
// BasePerson.sayBy()



// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string,
    surname: string,
    groupNumber: number,
    progress: number[],
    averageMark: number,
}

class Student implements IStudent {
    averageMark: number;

    constructor( public name: string, public surname: string, public groupNumber: number, public progress: number[]) {
        this.name = name;
        this.surname = surname;
        this.groupNumber = groupNumber;
        this.progress = progress;
        this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
    }

    private static sortStudent(s1: IStudent, s2: IStudent) {
        if (s1.averageMark > s2.averageMark) {
            return 1;
        } else if (s1.averageMark < s2.averageMark) {
            return -1;
        } else {
            return 0;
        }
    }

    static sort(arr:Array<IStudent>) {
        const temp = [...arr];
        return temp.sort(this.sortStudent);
    }

    private static isAllMarksEqual(marks: number[], searchMark: number) {
        return marks.every(m => m === searchMark);
    }

    private static filterStudents(arr:Array<IStudent>) {
        return arr.filter(s => this.isAllMarksEqual(s.progress, 4) || this.isAllMarksEqual(s.progress, 5));
    }

    static printGoodStudent(arr:Array<IStudent>) {
        this.filterStudents(arr).forEach(s => {
            console.log(`Student - ${s.surname}, Group - ${s.groupNumber}, AverageMark - ${s.averageMark}`);
        })
    }
}

let students = [];
students.push(new Student('Evgen', 'Sheuchuk', 1, [4,4,4,4,4]));
students.push(new Student('Yo', 'YoYo', 2, [4,3,4,3,4]));
students.push(new Student('Nick', 'Block', 3, [4,5,4,5,4]));
students.push(new Student('Hanna', 'Bond', 4, [5,5,5,5,5]));

console.log(students);
console.log(Student.sort(students));
Student.printGoodStudent(students);



// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};