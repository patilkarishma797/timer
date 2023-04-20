


function displaytime(){
    var datetime=new Date();
var hour=datetime.getHours();
var minute=datetime.getMinutes();
var second=datetime.getSeconds();
var session=document.getElementById('session');


if(hour>=12){
    session.innerHTML="PM"
}else{
    session.innerHTML="AM";

}
if(hour>12)
{
    hour=hour-12
}





document.getElementById("hour").innerHTML=hour;
document.getElementById("minute").innerHTML=minute;
document.getElementById("second").innerHTML=second;




}
setInterval(displaytime,1000);
