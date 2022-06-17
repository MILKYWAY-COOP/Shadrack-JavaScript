const x = function (a, b) {
    return a * b;
  };
  document.getElementById("demo1").innerHTML = x;

  //variable x can be used as a function.
  let z = x(5, 4);
  console.log(z);
  document.getElementById("demo2").innerHTML = z;

  //JavaScript function defined with a built in JavaScript function constructor
  const myFunction = new Function("a", "b", "return a * b");
  document.getElementById("demo3").innerHTML = myFunction(5, 5);

  //no need for a constructor. the example above can be same as writting.
  const myFunction1 = function (a, b) {
    return a * b;
  };
  let x1 = myFunction1(6, 5);
  document.getElementById("demo4").innerHTML = x1;

  // anonymous self-invoking function(function without name)
  (function () {
    document.getElementById("demo5").innerHTML = "Hello I called myself.";
  })(); //i will invoke myself


  //functions can be treated as values
  function myFunction2 (a, b) {
    return a * b;
  }
  let x2 = myFunction2(7, 5);
  document.getElementById("demo6").innerHTML = x2;


  //functions can be used in expressions
  let x3 = myFunction2(7, 5) * 2;
  document.getElementById("demo7").innerHTML = x3;


