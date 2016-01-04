describe("Calculator", function(){
  it ("should store the current value at all times", function(){
    expect(Calculator.currentVal).toBeDefined();
    expect(Calculator.currentVal).toEqual(0);
  });

  it ("should add numbers", function(){
    expect(Calculator.add(5)).toEqual(5);
    expect(Calculator.add(5)).toEqual(10);
  });

  it ("should add any number of numbers", function(){
    expect(Calculator.add(1,2,3)).toEqual(6); 
  });
});
