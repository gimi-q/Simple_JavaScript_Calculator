window.Calculator = {
  currentVal: 0,
  add: function(num1){
     var sum = this.currentVal;
     for (var i= 0, len = arguments.length; i < len; i++) {
       sum += arguments[i];
     }
     this.currentVal = sum;
     return this.currentVal;

  }
};
