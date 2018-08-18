// Write your code in this file!
    function scuberGreetingForFeet(someValue) {
      //this is where we can use conditionals given our argument, someValue
      //don't forget to return whatever the result is!
      let greeting;
      if(someValue < 400){
        greeting = "This one is on me!";
      }
      else if(someValue > 2000 & someValue < 2490){
        greeting = "I will gladly take your thirty bucks."
      }
      else if(someValue > 2500){
        greeting = "No can do."
      }
      
      return greeting;
    }
    
        function ternaryCheckCity(someValue) {
      //this is where we can use conditionals given our argument, someValue
      //don't forget to return whatever the result is!
      let greeting;
       someValue === "NYC" ?  greeting="Ok, sounds good." : greeting="No go.";
       return greeting;
    }
    
        function switchOnCharmFromTip(someValue) {
      //this is where we can use conditionals given our argument, someValue
      //don't forget to return whatever the result is!
      let greeting;
      switch (someValue){
        case "generous":
          greeting="Thank you so much.";
          break;
        case "not as generous":
          greeting="Thank you.";
          break;
        default:
        greeting="Bye.";
          
      }
      return greeting;
    }