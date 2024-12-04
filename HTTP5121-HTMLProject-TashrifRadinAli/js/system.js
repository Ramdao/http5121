window.onload=start

function start(){
    // Goes back to main page
    document.getElementById("btn").onclick=function(){
        window.location="index.html"
        
    }
}
// To show information about a planet when hover mouseover
function planet1info(event){
    document.getElementById("planetinfo").innerHTML= "Planet type: Rocky";
}

function planet1infoout(){
    
    document.getElementById("planetinfo").innerHTML= "";
}

function planet2info(event){
    document.getElementById("planetinfo").innerHTML= "Planet type: Rocky";
}

function planet2infoout(){
    
    document.getElementById("planetinfo").innerHTML= "";
}

function planet3info(event){
    document.getElementById("planetinfo").innerHTML= "Planet type: Gas Giant";
}

function planet3infoout(){
    
    document.getElementById("planetinfo").innerHTML= "";
}

function planet4info(event){
    document.getElementById("planetinfo").innerHTML= "Planet type: Gas Giant";
}

function planet4infoout(){
    
    document.getElementById("planetinfo").innerHTML= "";
}

function planet5info(event){
    document.getElementById("planetinfo").innerHTML= "Planet type: Gas Giant";
}

function planet5infoout(){
    
    document.getElementById("planetinfo").innerHTML= "";
}