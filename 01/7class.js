//**************************stack and heap memory******************** */

// stack( primitive), and Heap(non primitive)  memory

let myYoutubenamme = "Anindya Dev"

let anothername = myYoutubenamme
anothername = "kalyan"

console.log(myYoutubenamme );
console.log(anothername );

let userOne ={

    email: "anindyaking915@gmail.com",
    upi: "gip@bl"


}
let userTwo  = userOne

userTwo.email = "king45@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

