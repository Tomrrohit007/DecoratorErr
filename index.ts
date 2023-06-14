enum Manufactures {
  airBus = "Airbus",
  boeing = "Boeing",
}

function AirplaneDecorator(manufacture: Manufactures) {
  return (target: Function) => {
    if (manufacture === Manufactures.airBus) {
      target.prototype.origin = "USA";
      target.prototype.type = "jet";
    } else {
      target.prototype.origin = "France";
      target.prototype.type = "helicopter";
    }
  };
}

@AirplaneDecorator(Manufactures.airBus)
class Aircraft {
  constructor(public _model: string, public name: string) {
    console.log("class is invoked");
  }

  public getName() {
    console.log(this.name);
  }

  public get model() {
    return this._model;
  }
}

const aircraft = new Aircraft("f24", "Mark");
console.log(aircraft);
