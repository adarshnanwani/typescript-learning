import 'reflect-metadata';

const plane = {
  color: 'red'
};

// Define metadata for Objects
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

console.log(note);

console.log(height);

// Define metadata for properties

Reflect.defineMetadata('note2', 'hi there2', plane, 'color');

const note2 = Reflect.getMetadata('note2', plane, 'color');

console.log(note2);
