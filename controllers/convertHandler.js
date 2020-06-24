function ConvertHandler() {

  this.getNum = function (input) {
    const regex = /[A-Za-z]/;
    return input.split(regex)[0];
  };

  this.getUnit = function (input) {
    const regex = /[^A-Za-z]/;
    let ar = input.split(regex)
    return ar[ar.length-1];
  };

  this.getReturnUnit = function (initUnit) {
    const unitMappings = {
      'gal': 'l',
      'l': 'gal',
      'lbs': 'kg',
      'kg': 'lbs',
      'mi': 'km',
      'km': 'mi'
    }
    return unitMappings[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function (unit) {
    const unitMappings = {
      'gal': 'gallons',
      'l': 'liters',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers'
    }
    return unitMappings[unit.toLowerCase()];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let initUnitLower = initUnit.toLowerCase()
    let result
    switch (initUnitLower) {
      case 'gal':
        result = initNum * galToL
        break;
      case 'l':
        result = initNum / galToL
        break;
      case 'lbs':
        result = initNum * lbsToKg
        break;
      case 'kg':
        result = initNum / lbsToKg
        break;
      case 'mi':
        result = initNum * miToKm
        break;
      case 'km':
        result = initNum / miToKm
        break;
      default:
        console.log(`Sorry, we are out of ${initUnitLower}.`);
        return result
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let initUnitToString = this.spellOutUnit(initUnit);
    let returnUnitToString = this.spellOutUnit(returnUnit);
    const elements = [initNum, initUnitToString, 'converts to', returnNum, returnUnitToString];
    return elements.join(' ')
  };

}

module.exports = ConvertHandler;
