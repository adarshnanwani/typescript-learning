import 'reflect-metadata';


// /* WITH JS */

// const plane = {
//   color: 'red'
// };

// // Define metadata for Objects
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);

// console.log(height);

// // Define metadata for properties

// Reflect.defineMetadata('note2', 'hi there2', plane, 'color');

// const note2 = Reflect.getMetadata('note2', plane, 'color');

// console.log(note2);


// /* WITH TS */

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('123')
  fly(): void {
    console.log('vrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    console.log(Reflect.getMetadata('secret', target.prototype, key))
  }
}
