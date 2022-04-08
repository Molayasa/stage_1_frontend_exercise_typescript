import {
  IPerson,
  IDCHero,
  TDuplicateValue,
  TGetAvenger,
  IRectangle,
} from './interfaces';

// 1. Use let and const
let fullName: string = 'Nestor Kauil';
let age: number = 25;

const CHARACTER: IPerson = {
  fullName,
  age,
};
console.log(CHARACTER);

// 2. Use of interface to validate object
const batman: IDCHero = {
  fullName: 'Bruno Díaz',
  marcialArts: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu'],
};

console.log(batman);

// 3. Arrow functions
const duplicateValue1: TDuplicateValue = (a: number, b: number): number => {
  return (a + b) * 2;
};
const duplicateValue2: TDuplicateValue = (a: number, b: number): number =>
  (a + b) * 2;

console.log(duplicateValue1(2, 2));
console.log(duplicateValue2(2, 2));

// 4. Mandatory, optional and default parameters
const getAvenger: TGetAvenger = (name, power, gun = 'Arc') => {
  let message;
  if (power) {
    message = `${name} has the power of ${power}, and a ${gun} gun.`;
  } else {
    message = `${name} has a/an ${gun}`;
  }
  return message;
};
console.log(getAvenger('Wonder Woman', ''));

// 5. Using Classes, Constructors, Properties, methods

class Rectangle implements IRectangle {
  public base: number;
  public hight: number;
  constructor(base: number, hight: number) {
    this.base = base;
    this.hight = hight;
  }
  calcArea(): number {
    return this.base * this.hight;
  }
}
let figure: Rectangle = new Rectangle(2, 3);
console.log(figure.calcArea());
