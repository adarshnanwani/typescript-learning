class HoldAnything<TypeOfData> {
  constructor(public data: TypeOfData) { }
}

const holdNumber = new HoldAnything<number>(6);
console.log(holdNumber.data);

const holdString = new HoldAnything<string>('Adarsh');
console.log(holdString.data);
