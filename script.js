const units = {
    length: ['meter', 'centimeter', 'kilometer', 'inch', 'foot', 'yard', 'mile'],
    weight: ['gram', 'kilogram', 'ounce', 'pound', 'tonne'],
    area: ['square meter', 'square kilometer', 'square centimeter', 'square inch', 'square foot', 'square yard', 'acre', 'hectare'],
    volume: ['cubic meter', 'cubic kilometer', 'cubic centimeter', 'cubic inch', 'cubic foot', 'cubic yard', 'milliliter', 'liter', 'gallon', 'quart', 'pint', 'cup'],
  };
  
  function populateUnits() {
    const unitType = document.getElementById('unitType').value;
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
  
    // Clear existing options
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';
  
    // Populate options based on selected unit type
    units[unitType].forEach(unit => {
      const option1 = document.createElement('option');
      option1.value = unit;
      option1.textContent = unit;
      const option2 = document.createElement('option');
      option2.value = unit;
      option2.textContent = unit;
      fromUnitSelect.appendChild(option1);
      toUnitSelect.appendChild(option2);
    });
  }
  
  function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultElement = document.getElementById('result');
    let result;
  
    // Conversion logic based on unit type
    switch(document.getElementById('unitType').value) {
      case 'length':
        result = lengthConverter(inputValue, fromUnit, toUnit);
        break;
      case 'weight':
        result = weightConverter(inputValue, fromUnit, toUnit);
        break;
      case 'area':
        result = areaConverter(inputValue, fromUnit, toUnit);
        break;
      case 'volume':
        result = volumeConverter(inputValue, fromUnit, toUnit);
        break;
      // Add cases for other unit types here
      default:
        result = 'Invalid unit type';
    }
  
    resultElement.textContent = `${inputValue} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
  }
  
  // Length converter function
  function lengthConverter(value, fromUnit, toUnit) {
    const conversionFactors = {
      meter: { meter: 1, centimeter: 100, kilometer: 0.001, inch: 39.3701, foot: 3.28084, yard: 1.09361, mile: 0.000621371 },
      centimeter: { meter: 0.01, centimeter: 1, kilometer: 0.00001, inch: 0.393701, foot: 0.0328084, yard: 0.0109361, mile: 0.00000621371 },
      kilometer: { meter: 1000, centimeter: 100000, kilometer: 1, inch: 39370.1, foot: 3280.84, yard: 1093.61, mile: 0.621371 },
      inch: { meter: 0.0254, centimeter: 2.54, kilometer: 0.0000254, inch: 1, foot: 0.0833333, yard: 0.0277778, mile: 0.000015783 },
      foot: { meter: 0.3048, centimeter: 30.48, kilometer: 0.0003048, inch: 12, foot: 1, yard: 0.333333, mile: 0.000189394 },
      yard: { meter: 0.9144, centimeter: 91.44, kilometer: 0.0009144, inch: 36, foot: 3, yard: 1, mile: 0.000568182 },
      mile: { meter: 1609.34, centimeter: 160934, kilometer: 1.60934, inch: 63360, foot: 5280, yard: 1760, mile: 1 }
    };
    return value * conversionFactors[fromUnit][toUnit];
  }
  
  // Weight converter function
  function weightConverter(value, fromUnit, toUnit) {
    const conversionFactors = {
      gram: { gram: 1, kilogram: 0.001, ounce: 0.035274, pound: 0.00220462, tonne: 0.000001 },
      kilogram: { gram: 1000, kilogram: 1, ounce: 35.274, pound: 2.20462, tonne: 0.001 },
      ounce: { gram: 28.3495, kilogram: 0.0283495, ounce: 1, pound: 0.0625, tonne: 0.0000283495 },
      pound: { gram: 453.592, kilogram: 0.453592, ounce: 16, pound: 1, tonne: 0.000453592 },
      tonne: { gram: 1000000, kilogram: 1000, ounce: 35274, pound: 2204.62, tonne: 1 }
    };
    return value * conversionFactors[fromUnit][toUnit];
  }
  
  // Area converter function
  function areaConverter(value, fromUnit, toUnit) {
    const conversionFactors = {
      'square meter': { 'square meter': 1, 'square kilometer': 0.000001, 'square centimeter': 10000, 'square inch': 1550.0031, 'square foot': 10.7639104, 'square yard': 1.19599005, 'acre': 0.000247105, 'hectare': 0.0001 },
      'square kilometer': { 'square meter': 1000000, 'square kilometer': 1, 'square centimeter': 10000000000, 'square inch': 1550003100.0062, 'square foot': 10763910.41670972, 'square yard': 1195990.04630108, 'acre': 247.1053814672, 'hectare': 100 },
      'square centimeter': { 'square meter': 0.0001, 'square kilometer': 0.0000000001, 'square centimeter': 1, 'square inch': 0.15500031, 'square foot': 0.00107639, 'square yard': 0.000119599, 'acre': 0.0000000247, 'hectare': 0.00000001 },
      'square inch': { 'square meter': 0.00064516, 'square kilometer': 0.00000000064516, 'square centimeter': 6.4516, 'square inch': 1, 'square foot': 0.00694444, 'square yard': 0.000771605, 'acre': 0.000000159, 'hectare': 0.0000000645 },
      'square foot': { 'square meter': 0.092903, 'square kilometer': 0.000000092903, 'square centimeter': 929.0304, 'square inch': 144, 'square foot': 1, 'square yard': 0.111111, 'acre': 0.0000229568, 'hectare': 0.0000092903 },
      'square yard': { 'square meter': 0.836127, 'square kilometer': 0.000000836127, 'square centimeter': 8361.2736, 'square inch': 1296, 'square foot': 9, 'square yard': 1, 'acre': 0.000206612, 'hectare': 0.0000836127 },
      'acre': { 'square meter': 4046.86, 'square kilometer': 0.00404686, 'square centimeter': 40468600, 'square inch': 6272640, 'square foot': 43560, 'square yard': 4840, 'acre': 1, 'hectare': 0.404686 },
      'hectare': { 'square meter': 10000, 'square kilometer': 0.01, 'square centimeter': 100000000, 'square inch': 15500031, 'square foot': 107639, 'square yard': 11959.9, 'acre': 2.47105, 'hectare': 1 }
    };
    return value * conversionFactors[fromUnit][toUnit];
  }
  
  // Volume converter function
  function volumeConverter(value, fromUnit, toUnit) {
    const conversionFactors = {
      'cubic meter': { 'cubic meter': 1, 'cubic kilometer': 0.000000000001, 'cubic centimeter': 1000000000, 'cubic inch': 61023.744, 'cubic foot': 35.3147, 'cubic yard': 1.30795, 'milliliter': 1000000, 'liter': 1000, 'gallon': 264.172, 'quart': 1056.69, 'pint': 2113.38, 'cup': 4226.75 },
      'cubic kilometer': { 'cubic meter': 1000000000000, 'cubic kilometer': 1, 'cubic centimeter': 1000000000000000000, 'cubic inch': 6102374409499.81, 'cubic foot': 35314666721.0439, 'cubic yard': 1307950618.6198, 'milliliter': 1000000000000000, 'liter': 1000000000000, 'gallon': 264172052358.15, 'quart': 1056688209432.61, 'pint': 2113376418865.22, 'cup': 4226752837730.43 },
      'cubic centimeter': { 'cubic meter': 0.000001, 'cubic kilometer': 0.00000000000001, 'cubic centimeter': 1, 'cubic inch': 0.0610237, 'cubic foot': 0.0000353147, 'cubic yard': 0.00000130795, 'milliliter': 1, 'liter': 0.001, 'gallon': 0.000264172, 'quart': 0.00105669, 'pint': 0.00211338, 'cup': 0.00422675 },
      'cubic inch': { 'cubic meter': 0.0000163871, 'cubic kilometer': 0.000000000000026458, 'cubic centimeter': 16.3871, 'cubic inch': 1, 'cubic foot': 0.000578704, 'cubic yard': 0.0000214335, 'milliliter': 16.3871, 'liter': 0.0163871, 'gallon': 0.004329, 'quart': 0.017316, 'pint': 0.034632, 'cup': 0.0692641 },
      'cubic foot': { 'cubic meter': 0.0283168, 'cubic kilometer': 0.0000000000283168, 'cubic centimeter': 28316.8, 'cubic inch': 1728, 'cubic foot': 1, 'cubic yard': 0.037037, 'milliliter': 28316.8, 'liter': 28.3168, 'gallon': 7.48052, 'quart': 29.9221, 'pint': 59.8442, 'cup': 119.688 },
      'cubic yard': { 'cubic meter': 0.764555, 'cubic kilometer': 0.000000000764555, 'cubic centimeter': 764554.858, 'cubic inch': 46656, 'cubic foot': 27, 'cubic yard': 1, 'milliliter': 764554.858, 'liter': 764.555, 'gallon': 201.974, 'quart': 807.896, 'pint': 1615.79, 'cup': 3231.59 },
      'milliliter': { 'cubic meter': 0.000001, 'cubic kilometer': 0.00000000000001, 'cubic centimeter': 1, 'cubic inch': 0.0610237, 'cubic foot': 0.0000353147, 'cubic yard': 0.00000130795, 'milliliter': 1, 'liter': 0.001, 'gallon': 0.000264172, 'quart': 0.00105669, 'pint': 0.00211338, 'cup': 0.00422675 },
      'liter': { 'cubic meter': 0.001, 'cubic kilometer': 0.000000000001, 'cubic centimeter': 1000, 'cubic inch': 61.0237, 'cubic foot': 0.0353147, 'cubic yard': 0.00130795, 'milliliter': 1000, 'liter': 1, 'gallon': 0.264172, 'quart': 1.05669, 'pint': 2.11338, 'cup': 4.22675 },
      'gallon': { 'cubic meter': 0.00378541, 'cubic kilometer': 0.00000000378541, 'cubic centimeter': 3785.41, 'cubic inch': 231, 'cubic foot': 0.133681, 'cubic yard': 0.00495113, 'milliliter': 3785.41, 'liter': 3.78541, 'gallon': 1, 'quart': 4, 'pint': 8, 'cup': 16 },
      'quart': { 'cubic meter': 0.000946353, 'cubic kilometer': 0.000000000946353, 'cubic centimeter': 946.353, 'cubic inch': 57.75, 'cubic foot': 0.0334201, 'cubic yard': 0.00123781, 'milliliter': 946.353, 'liter': 0.946353, 'gallon': 0.25, 'quart': 1, 'pint': 2, 'cup': 4 },
      'pint': { 'cubic meter': 0.000473176, 'cubic kilometer': 0.000000000473176, 'cubic centimeter': 473.176, 'cubic inch': 28.875, 'cubic foot': 0.0167101, 'cubic yard': 0.000618902, 'milliliter': 473.176, 'liter': 0.473176, 'gallon': 0.125, 'quart': 0.5, 'pint': 1, 'cup': 2 },
      'cup': { 'cubic meter': 0.000236588, 'cubic kilometer': 0.000000000236588, 'cubic centimeter': 236.588, 'cubic inch': 14.4375, 'cubic foot': 0.00835503, 'cubic yard': 0.000309451, 'milliliter': 236.588, 'liter': 0.236588, 'gallon': 0.0625, 'quart': 0.25, 'pint': 0.5, 'cup': 1 }
    };
    return value * conversionFactors[fromUnit][toUnit];
  }
  
