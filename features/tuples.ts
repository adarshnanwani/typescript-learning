const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}


const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];

const coke: Drink = ['black', true, 44];

const tea: Drink = ['brown', false, 10];

const carSpecs: [number, number] = [400, 3354]
