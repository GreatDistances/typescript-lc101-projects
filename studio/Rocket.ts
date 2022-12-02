import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []; // I did this incorrectly, with just cargoItems: [];
    astronauts: Astronaut[] = [];  // I did this incorrectly, with just astronaut: [];
    constructor(name: string, totalCapacityKg: number) {
        // Constructor sets value of this.name and this.totalCapacityKg.  THIS IS NOT FINISHED, NEED TO UNDERSTAND CONSTRUCTOR BETTER
        this.name = name;  
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload [] ): number {
        // Returns the sum of all items using each item's massKg property
        let sum: number = 0; // let sum = 0; also works.  Do not need to declare type within functions in TS.
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }
    
    // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts); // ?? I don't understand use of "this." in front of sumMass.
    }
    
    canAdd(item: Payload): boolean { // ?? I am confused by "items: Payload []" parameter.
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        // !! use ternary operator here ? // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        //if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
        //    return()
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
        }
    
    addCargo(cargo: Cargo): boolean { // I am confused by "cargo: Cargo" parameter.
        // Uses this.canAdd() to see if another item can be added.
        // If true, adds cargo to this.cargoItems and returns true.
        // If false, returns false.
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        // Uses this.canAdd() to see if another astronaut can be added.
        // If true, adds astronaut to this.astronauts and returns true.
        // If false, returns false.
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
        return true;
        }
        return false;
    }
 }
 