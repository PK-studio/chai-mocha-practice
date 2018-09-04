module.exports = {
  basicValues: {
    start: function() {
      return 'start';
    },
    addNumbers: function(a,b){
      return a+b;
    }
  },
  arreyGame: function(){
    const list = [];
    this.returnList = () => {
      return list
    };
  }
}