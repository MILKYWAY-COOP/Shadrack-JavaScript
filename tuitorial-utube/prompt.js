function myFunction() {
    let person = prompt("Please enter your name", "Sheddiey");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  };

  function myFunc(){
    let text;
    let favDrink = prompt("What's your favourite drink?", "fanta");
    switch(favDrink){
        case "fanta" :
            text = "Excellent choice,  Fanta is good for your soul.";
            break;
        case "pepsi" :
            text = "I like pepsi too!";
            break;
        case "coca-cola" :
            text = "Really?, Are you sure coca-cola is your favourite?";
            break; 
        case "Sprite" :
            text = "You have an Excellent taste!";
            break;
        default:
            text = "I have never heard of that one.";
    };
    document.getElementById("demo2").innerHTML = text;
  };