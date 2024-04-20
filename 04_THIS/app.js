const person = {
    name:"Conan",
    city: "Los Angeles",
    sing: function(){
        return `${this.name} sings LAL LALA LAAL`
    }
}

class Cat {
    constructor(firstName){
        this.firstName = firstName
    }

    dance(style="tango"){
        return `Meow, i am ${this.firstName}` + ` and 
        I like to ${style}
        `
    }
}

const blue = new Cat("NNN")
const blueD = blue.dance;
console.log(blueD.call(blue,"tango"))
console.log(blueD.apply(blue,["tango"]))

function taxRate  (tax, price){
    return price +price * tax;
}

const ngtaxRate = taxRate.bind(null, 0.075,100);


// EVENT LISTENERS
const clickMeBTN = document.querySelector('#clickMe')

clickMeBTN.addEventListener('click',()=>{
    console.log("clicked")
})