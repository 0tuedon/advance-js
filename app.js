// class Dog {
//     constructor(name,breed){
//         this.name = name;
//         this.breed = breed
//     }
//  bark(){
//    console.log("Bark BArk")
//  }
// }

// This constructor function may be converted to a class declaration.ts
function  Dog(name, breed){
   this.name = name;
   this.breed = breed  
}
Dog.prototype.bark = function(){
   return `${this.name} say woof!`
}


// 
// _proto_ under the hood


// Classes Inheritance & Prototypes

console.log(Dog.prototype,"test")