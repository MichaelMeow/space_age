export function Age(userAge) {
  this.userAge = userAge;
}



Age.prototype.output = function(){
  return this.userAge;
}

Age.prototype.mercury = function(){
  let mercuryAge = this.userAge * .24;
  return mercuryAge;
}

Age.prototype.venus = function(){
  let venusAge = this.userAge * .62;
  return venusAge;
}

Age.prototype.venus = function(){
  let venusAge = this.userAge * .62;
  return venusAge;
}
