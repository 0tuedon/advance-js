class Circle {
    #radius;
    static allowedColors = ["red","green", "yellow"];
    constructor(radius){
        this.#radius = radius;
        this._color = color
    }
    get diameter() {
        return this.#radius * 2
    }

    set radius(value){
        if(value<0){
            throw new Error("Radius cannot be negative");
        }
        else {
            this.#radius = value
        }
    }
    setColor(color){
        if(Circle.allowedColors.has(color)){
            this._color = color
            return color; 
        }   
        else {
            throw new Error("That color is not allowed")
        }
    }
    get color(){
        return this._color;
    }
    set color(newColor){

    }
}

class Cat {
    static numOfCat = 0 
    name;
    numLegs = 4;
    hasTail = true;

    constructor(name){
        this.name = name
        Cat.numOfCat =+1
    }

}

const myCircle = new Circle()