// Write your code in this file!
function scuberGreetingForFeet(ride){
  
if (ride <= 400){
return "This one is on me!";
}else if(ride > 2000 && ride <2501){
  return 'I will gladly take your thirty bucks.';
}else{
  return 'No can do.';
}
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);
function ternaryCheckCity(city){
if (city == "NYC" ){
    return "Ok, sounds good.";
  }else{
    return 'No go.';
  }
}
ternaryCheckCity("NYC");
ternaryCheckCity("yemen");
function switchOnCharmFromTip(tip){
  if (tip=="generous"){
    return 'Thank you so much.';
  }else if (tip =="not as generous"){
    return 'Thank you.';
  }else{
    return 'Bye.'
  }
}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip("it is ok");