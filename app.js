module.exports = {
  basicValues: {
    start: function() {
      return 'start';
    },
    addNumbers: function(a,b){
      return a+b;
    }
  },
  arrayGame: function(){
    let numbers = [];
    this.getNumbers = function() {
      return numbers;
    }
    this.sumNumbers = function() {
      let sum = 0;
      for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
      }
      return sum;
    };
    this.multiplyAll = function() {
      if(numbers.length === 0) return null;
      let equation = 0;
      for(let i = 0; i < numbers.length; i++){
        sum *= numbers[i]
      }
      return sum;
    };
    this.push = function(number){
      numbers.push(number);
    };
    this.clear = function(){
      numbers.splice(0,numbers.length);
    }
  }
}