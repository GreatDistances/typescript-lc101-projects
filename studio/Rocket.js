"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = []; // I did this incorrectly, with just cargoItems: [];
        this.astronauts = []; // I did this incorrectly, with just astronaut: [];
        // Constructor sets value of this.name and this.totalCapacityKg.  THIS IS NOT FINISHED, NEED TO UNDERSTAND CONSTRUCTOR BETTER
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        // Returns the sum of all items using each item's massKg property
        var sum = 0; // let sum = 0; also works.  Do not need to declare type within functions in TS.
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts); // ?? I don't understand use of "this." in front of sumMass.
    };
    Rocket.prototype.canAdd = function (item) {
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        // !! use ternary operator here ? // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        //if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
        //    return()
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        // Uses this.canAdd() to see if another item can be added.
        // If true, adds cargo to this.cargoItems and returns true.
        // If false, returns false.
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // Uses this.canAdd() to see if another astronaut can be added.
        // If true, adds astronaut to this.astronauts and returns true.
        // If false, returns false.
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
