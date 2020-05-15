class Vehicle {
  public color: string;
  protected industrial: boolean = false;
  constructor(color: string) {
    this.color = color;
  }

  public start(): void {
    console.log('Chug chug');
  }

  public honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color); // red
vehicle.start(); // Chug chug
vehicle.honk(); // beep

// ACCESS MODIFIERS
// 1) Public - can be access within the class, outside the class
//             and in child classes
// 2) Private - can only be accessed within the class and not in
//              child classes. Not even on the instance.
// 3) Protected - can be accessed within the class and in the
//                child classes, but not on the instance

class Car extends Vehicle {
  public start(): void {
    console.log('Vroom!');
  }
  private carType(): void {
    console.log('Petrol');
  }
  public getCarInfo(): void {
    this.carType();
  }
}

const car = new Car('blue');
console.log(car.color); // blue
car.start(); // Vroom!
car.honk(); // beep
car.getCarInfo(); // Petrol

class Truck extends Vehicle {
  constructor(public wheelCount: number, color: string) {
    super(color);
  }

  public isIndustrialVehicle(): void {
    console.log(this.industrial);
  }

  public start(): void {
    console.log('Roar!');
  }
}

const truck = new Truck(10, 'orange');
console.log(truck.color); // orange
console.log(truck.wheelCount); // 10
truck.isIndustrialVehicle() // false
truck.start(); // Roar!
