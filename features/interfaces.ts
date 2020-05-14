interface Reportable {
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`
  }
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`
  }
};

// Interface acts like a gatekeeper
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink2);
