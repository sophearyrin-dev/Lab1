//Problem1: 
let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // output: true, because we use object.property
  
  delete rabbit.jumps; 
  console.log(rabbit.jumps);
  // output: null, becuase we delete the jumps property in rabbit object (line12), 
  //and try to output it, so it will call the property of jumps in super class animal
  
  delete animal.jumps;
  console.log( rabbit.jumps ); 
  // output: undefined, becuase we also deleted the jumps property in animal object,
  //so when we try to output, it cannot find, so the result is undefined


  //Problem2
  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    __proto__ : bed,
    money: 2000,
  };
//solution
//1).
console.log('pen value = '+ pockets.pen);
console.log('glasses value = ' + bed.glasses);
//2).head.glasses is faster than pockets.glasses

//Problem3
// We have rabbit inheriting from animal.
// If we call rabbit.eat(), which object receives the full property: animal or rabbit?
let animal1 = {
  eat() {
    this.full = true;
  }
};

let rabbit1 = {
  __proto__: animal
};

rabbit1.eat();
//Answer: the object that received full property is animal
