const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const carr = carMakers[0]
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(10); // Gives error

// Help with 'map','reduce', etc.
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('2030-10-10');
importantDates.push(new Date());
importantDates2.push(100);  // Gives error
importantDates.push(100); // Gives error
