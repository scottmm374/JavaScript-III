/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global- Anytime this is called in global scope it refers to the Window object, so basically everything in the console. Shows all of Javascript. 
* 2. Implicit- "this is bound to properties within the object eg:  this.name, this.greeter"
* 3. New - when used with New, "this" is bound to the newly created object (example const dog = new Animal ("dog", "woof") and this refers to a specific instance of the object and returned by the constructor function inside the object.
* 4. Explicit- can change the binding of "this" keyword by using  call() or apply() when invoking. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log("Global Binding \n ", this);

// Principle 2

// code example for Implicit Binding

const profession = {
    wish: "I want to be a",
    time: "when I grow up!",
    what: function (role) {
        console.log("Implicit Binding \n ", `${this.wish} ${role} ${this.time}`);
    }
};

profession.what("Wizard");

// Principle 3

// code example for New Binding

function AnimalSounds (animal, sound){
    this.animal = animal;
    this.sound = sound;
    this.speak = function (){
        console.log("New Binding \n", ` A ${this.animal} makes the sound ${this.sound}`)
    }
};

const dog = new AnimalSounds("dog", "Whoof Whoof!");
const cat = new AnimalSounds("cat", "Meow");
dog.speak();
cat.speak();

// Principle 4

// code example for Explicit Binding

function AlternateUniverse (animalSound){   
    this.animalSound = animalSound;
    this.says = function (){
        console.log("Explicit Binding \n", ` A dog  ${this.animalSound}`);
        console.log("Explicit Binding \n", ` A cat  ${this.animalSound}`);
    }
};

const dogs = new AlternateUniverse("Barks");
const cats = new AlternateUniverse("Purrs");


dogs.says.call(cats);
cats.says.apply(dogs);

// I wrote two console logs just to show the bindings a bit more clear. 


