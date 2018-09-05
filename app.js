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
  },
  task: function(){
    this.listFromNumber = (num) => {
      let list = [];
      if(!num || typeof num != 'number') return list;
      list = num.toString().split("");
      let l = list.length;
      while(l < 9){
        list.unshift("0")
        l++;
      } 
      return list;
    };
    this.splitToGroups = (num) => {
      let list = this.listFromNumber(num);
      let group = [];
      var l = list.length;
      while(l > 0){
        let newArrey = list.splice(list.length-3, 3);
        group.push(newArrey);
        l = list.length;
      }
      return group;
    }
  }
}