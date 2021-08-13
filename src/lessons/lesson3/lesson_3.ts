console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

let hi = 'Hi hi';

// let prom = new Promise((res, rej) => {
//     let a = 10;
//     // some async request
//     res(a);
//     //rej(0);
// });
//
// console.log(prom)
//
// prom
//     .then(result => {
//         console.log('then result ', result);
//         //@ts-ignore
//         return { data: result + 50, someThingElse: 'Yo'};
//     })
//     .then(result2 => {
//         console.log('then result2 ', result2);
//         console.log('hi ', hi);
//     })
//     .then(result3 => {
//         console.log('then result3 ', result3);
//     })



// let prom = new Promise((res, rej) => {
//     let a = 0;
//     // some async request
//     //res(a);
//     rej(0);
// });
//
// console.log(prom)
//
// prom
//     .then(result => {
//         throw 300500;
//         console.log('then result ', result);
//     }, err => {
//         console.log('then err ', err);
//         throw 100500;
//         return err + 10;
//     })
//     .then(result2 => {
//         console.log('then result2 ', result2);
//     }, err2 => {
//         console.log('then err2 ', err2);
//         throw 500500;
//     })
//     .then(null, err3 => {
//         console.log('then err3 ', err3);
//     })

//
// let prom = new Promise((res, rej) => {
//     let a = 0;
//     // some async request
//     //res(a);
//     rej(0);
// });
//
// console.log(prom)
//
// prom
//     .then(result => {
//         throw 300500;
//         console.log('then result ', result);
//     })
//     .then(null, err => {
//         console.log('then err ', err);
//         throw 100500;
//         return err + 10;
//     })
//     .then(result2 => {
//         console.log('then result2 ', result2);
//     })
//     // .then(null, err2 => {
//     //     console.log('then err2 ', err2);
//     //     throw 500500;
//     // })
//     .catch(err2 => {
//         console.log('then err2 ', err2);
//         throw 500500;
//     })





// let prom = new Promise((res, rej) => {
//     let a = 0;
//     // some async request
//     res(a);
//     //rej(0);
// });
//
// console.log(prom)
//
// prom
//     .then(result => {
//         console.log('then result ', result);
//     })
//     .catch(err => {
//         console.log('catch err ', err);
//         throw 500500;
//     })
//     .then(result2 => {
//         console.log('then result2 ', result2);
//         throw 'Yo';
//     })
//     .catch(err2 => {
//         console.log('catch err2 ', err2);
//         throw 500500;
//     })
//     .catch(err3 => {
//         console.log('catch err3 ', err3);
//     })




// let prom = new Promise((res, rej) => {
//     let a = 0;
//     // some async request
//     //res(a);
//     rej(0);
// });
//
// console.log(prom)
//
// prom
//     .then(result => {
//         console.log('then result ', result);
//     })
//     .then(result2 => {
//         console.log('then result2 ', result2);
//         throw 'Yo';
//     })
//     // .catch(err => {
//     //     console.log('catch err ', err);
//     // })
//     .then(null, err => {
//         console.log('then error ', err);
//     })


// try {
//     let prom = new Promise((res, rej) => {
//         let a = 0;
//         // some async request
//         //res(a);
//         rej(10);
//     });
//     prom.then(console.log)
// } catch (e) {
//     console.log(e)
// }

//
// let prom = new Promise((res, rej) => {
//     let a = 10;
//     // some async request
//     res(a);
//     //rej(0);
// });
//
// console.log(prom)
//
// prom
//     .then(result => {
//         console.log('then result ', result);
//     })
//     .finally(() => {
//         console.log('finally ', 'YoYo');
//     })
//     .then(result2 => {
//         console.log('then result2 ', result2);
//         throw 5;
//     })
//     .finally(() => {
//         console.log('finally2 ', 'YoYo2');
//     })
//      .catch(err => {
//         console.log('catch err ', err);
//     })
//     .finally(() => {
//         console.log('finally3 ', 'YoYo3');
//     })


// let a = 10;

// let prom = new Promise((res, rej) => {
//     let c = 10;
//     // some async request
//     res(a);
//     //rej(0);
// });

// prom
//     .then(result => {
//         console.log('then result ', result);
//     })
//     .then(result => {
//         console.log('then result ', result);
//     })

// setTimeout(() => {}, 1000);

// let b = 50;

// Promise.resolve(10).then();
// Promise.reject(0).then().catch();
// Promise.all([p1 , p2, p3]).then([]).catch();
// Promise.allSettled([p1 , p2, p3]).then([]);
// Promise.race([p1 , p2, p3]).then().catch()
// Promise.any([p1 , p2, p3]).then().catch()

// // just a plug
// export default () => {
// };

export  default () => {}