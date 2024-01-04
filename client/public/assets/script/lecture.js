

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

function fetchDataFromServer(userId) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const users = {
                1:{name: "John", age: 28},
                2:{name:"Jane", age:35}
            };

            const user = users[userId];

            if (user) {
                resolve(user)
            }
            else{
                reject('User not Found')
            }
        }, 5000);
    })
}

const userId = 1;


function printUser(userObj){
console.log(`User Found: ${userObj.name}, Age: ${userObj.age}`);
}

 async function fetchingOperation(){
     let user = await fetchDataFromServer(userId).then((userData=>{
        return userData
        console.log(userData);
      
    }) ).catch(error =>{
        console.log(error);
    })

    console.log(2+5);
    printUser(user);
}
fetchingOperation();
