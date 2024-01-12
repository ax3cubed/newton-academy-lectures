

// const myPromise = new Promise((resolve, reject) =>{
//     const success = false;

//     if (success){
//         resolve("Operation Successful")
//     }
//     else{
//         reject("Operation Failed")
//     }
// })

// myPromise.then((result) =>{
//     console.log(result);
// }).catch(error =>{
//     console.log(error);
// })

// function add(a,b,callback) {
//     const result = a + b;
//     callback(result);
// }


// add(2,3, (sum)=>{

// })

// function fetchDataFromServer(userId) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             const users = {
//                 1:{name: "John", age: 28},
//                 2:{name:"Jane", age:35}
//             };

//             const user = users[userId];

//             if (user) {
//                 resolve(user)
//             }
//             else{
//                 reject('User not Found')
//             }
//         }, 5000);
//     })
// }

// const userId = 1;


// function printUser(userObj){
// console.log(`User Found: ${userObj.name}, Age: ${userObj.age}`);
// }

//  async function fetchingOperation(){
//      let user = await fetchDataFromServer(userId).then((userData=>{
//         return userData
//         console.log(userData);
      
//     }) ).catch(error =>{
//         console.log(error);
//     })

//     console.log(2+5);
//     printUser(user);
// }
// fetchingOperation();



////////////////////////////Closure/////////////////////////
//Encapsulation
function outerFunction(x) {
    // inner function (closure) defined within the outer function
    function innerFunction(y) {
        return x + y; // inner function has access to the x variable of the outer function
    }
    return innerFunction; // outer Function returns the inner function
}

// create a closure by calling the outer function and storing the result
const closure = outerFunction(5);

// use the closure. it still has access to the x variable 
const result = closure(3);

console.log(result); // output the resule 8


function createCounter() {
    let count =0;

    function increment() {
        count++;
        console.log(`Count: ${count}`);
    }

    function decrement() {
        count--;
        console.log(`Count: ${count}`);
    }

    return {
        increment,decrement
    }
}

const {increment:counter1Increment, decrement:counter1Decrement} = createCounter();
const counter2 = createCounter();

counter1Increment();
counter1Increment();
counter1Increment();


counter2.decrement();
counter2.decrement();


console.log("----------------------------------------------------------------------------");
function createUniqueIdGenerator() {
    let idCounter  = 0;

    function generateUniqueId() {
        idCounter++;
        return `id_${idCounter}`;
    }
    return generateUniqueId;
}

const generateId1 = createUniqueIdGenerator();
const generateId2 = createUniqueIdGenerator();


const unique1 = generateId1();
const unique2 = generateId2();

console.log(unique1);
console.log(unique2);


const anotherUniqueId = generateId1();
console.log(anotherUniqueId);





function returnPerson() {
    const person = {
        name:"James",
        age:25,
        gender:'male'
    }
    return person
}

const person = returnPerson();

console.log({...person, maritalStatus:'marrried'});
