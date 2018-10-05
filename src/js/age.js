export function Age(userAge) {
  this.userAge = userAge;
}



  Age.prototype.output = function(){
    return this.userAge;
  }
