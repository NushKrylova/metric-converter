const unitMappings = {
  gal: "l",
  l: "gal",
  lbs: "kg",
  kg: "lbs",
  mi: "km",
  km: "mi"
};
function ConvertHandler() {
  this.getNum = function(input) {
    if (!input) {
      return;
    }

    const regexUnit = /[A-Za-z]/;
    let requestedNumber = input.split(regexUnit)[0];
    const regexValidNumber = /\d+(\.\d+)?(\/\d+)?/;

    if (!requestedNumber) {
      return 1;
    } else {
      let arrOfStrings = requestedNumber.split("/");
      console.log(">>", arrOfStrings);
      let arrOfFloat = [];
      for (let i = 0; i < arrOfStrings.length; i++) {
        if (Number(arrOfStrings[i])) {
          arrOfFloat.push(parseFloat(arrOfStrings[i]));
        } else {
          return;
        }
      }
      let initialValue = arrOfFloat[0];
      let finalNumber = arrOfFloat.reduce(
        (accumulator, currentValue, index) => {
          if (index !== 0) {
            return accumulator / currentValue;
          } else {
            return accumulator;
          }
        },
        initialValue
      );
      return Number(finalNumber.toFixed(5));
    }
    return;
  };

  this.getUnit = function(input) {
    if (!input) {
      return;
    }

    const regex = /[^A-Za-z]/;
    let ar = input.split(regex);
    let unit = ar[ar.length - 1];
    if (unit && unitMappings[unit.toLowerCase()]) {
      return ar[ar.length - 1].toLowerCase();
    }
    return;
  };

  this.getReturnUnit = function(initUnit) {
    return unitMappings[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    const unitMappings = {
      gal: "gallons",
      l: "liters",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometers"
    };
    return unitMappings[unit.toLowerCase()];
  };

  this.convert = function(initNum, initUnit) {
    if (!initUnit) {
      return;
    }
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let initUnitLower = initUnit.toLowerCase();
    let result;
    switch (initUnitLower) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        console.log(`Sorry, we are out of ${initUnitLower}.`);
    }
    return Number(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
