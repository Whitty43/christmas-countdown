var deadline = '2015-12-25';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML =  
        
        t.days + ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       ' + t.hours + '  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        ' + t.minutes + '       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ' + t.seconds;
     
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}
initializeClock('clockdiv', deadline);

$(".santa").click(function(){
    $(".toBeAnimated").animate({ 
        marginLeft: "+=250px",
    }, 1000 );
});