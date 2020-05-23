class Boat {
  @testDecorator
  color: string = 'blue';

  get formattedColor(): string {
    return `The boat's color is ${this.color}`;
  }

  @logError('Oops! The boat sunk!')
  pilot(): void {
    throw new Error()
    console.log('Swish')
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key)
}


function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}
