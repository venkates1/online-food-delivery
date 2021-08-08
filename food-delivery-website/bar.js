
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
 


var x=document.getElementById("noodles");
var y=document.getElementById("munchurian");
var z=document.getElementById("btn");

function munchurian(){
    x.style.left="-580px";
    y.style.left="3px";
    z.style.left="110px";
}

function noodles()
{
    x.style.left="100%";
    y.style.left="1500px";
    z.style.left="0px";
}

var a=document.getElementById("juices");
var b=document.getElementById("milkshakes");
var c=document.getElementById("btn");

function milkshakes(){
    a.style.left="-580px";
    b.style.left="3px";
    c.style.left="110px";
}

function juices()
{
    a.style.left="100%";
    b.style.left="1500px";
    c.style.left="0px";
}


        function myfunction(){
document.getElementById("mydropdown").classList.toggle("show");
        }
        

