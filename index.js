// Write your code in this file!

function scuberGreetingForFeet(ride){
  
  if(ride <= 400){
       Message ='This one is on me!';
        return Message;
      }
  else if (ride > 2000 && ride <= 2499 ){
        Message ='I will gladly take your thirty bucks.';
        return Message;
      }
  
  
  else if (ride > 2500 ){
        Message = 'No can do.' ;
          return Message ;
      }

}

function ternaryCheckCity(city)
{
    if (city === "NYC"){
      Message ="Ok, sounds good.";
        return Message;
    }
    else if (city === "Pittsburgh"){
       Message ="No go.";
        return Message;
    }
}
function switchOnCharmFromTip(tip){
    if(tip==='generous'){
      Message ="Thank you so much.";
        return Message;
    }
    else if (tip === 'not as generous'){
      Message = 'Thank you.';
        return Message;
    }
    else {
      return 'Bye.';}
}