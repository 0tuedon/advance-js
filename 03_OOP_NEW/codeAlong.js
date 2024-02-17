class Person {
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }

    get fullName(){
        return `${this.fName} ${this.lName}`
    }

    set fullName(fullName){
       const fullNameArray = fullName.split(" ");
       this.fName = fullNameArray[0]
       this.lName = fullNameArray[1]
    }
}

class MyClass {

    #privateMethod(){
        return `Yay`
    }
}

class DatabaseConnection {
    static  connection ="production"
    static {
        if(this.connection === "production"){
            this.loadProductionConnection()
        }
        else {
            this.loadProductionConnection();
            this.getFish()
        }
    }
    getFish(){
        console.log("fish")
    }
    static loadDevelopmentConnection(){
        console.log("Load Development")
    }
    static loadProductionConnection(){
        console.log("Load Production")
    }
}

const DbTest = new DatabaseConnection();

const DbTet = new DatabaseConnection();