export function Age(userAge) {
  this.userAge = userAge;
}



Age.prototype.output = function(){
  return this.userAge;
}

Age.prototype.mercury = function(){
  const mercuryRate = .24;
  let mercuryAge = this.userAge * mercuryRate;
  return mercuryAge;
}

Age.prototype.venus = function(){
  const venusRate = .62;
  let venusAge = this.userAge * venusRate;
  return venusAge;
}

Age.prototype.mars = function(){
  const marsRate = 1.88;
  let marsAge = this.userAge * marsRate;
  return marsAge;
}

Age.prototype.jupiter = function(){
  const jupiterRate = 11.86;
  let jupiterAge = this.userAge * jupiterRate;
  return jupiterAge;
}

Age.prototype.expected = function(){
  const expectedAge = 72;
  let expectedAgeRatio = (expectedAge-this.userAge)/this.userAge;
  expectedAgeRatio = Math.abs(expectedAgeRatio);
  let expectedMercury = this.mercury() * expectedAgeRatio;
  let expectedVenus = this.venus() * expectedAgeRatio;
  let expectedMars = this.mars() * expectedAgeRatio;
  let expectedJupiter = this.jupiter() * expectedAgeRatio;

  // precision, string, and float designed to get rid of float error
  return [parseFloat(expectedMercury.toPrecision(12).toString()), parseFloat(expectedVenus.toPrecision(12).toString()), parseFloat(expectedMars.toPrecision(12).toString()), parseFloat(expectedJupiter.toPrecision(12).toString())];
}
