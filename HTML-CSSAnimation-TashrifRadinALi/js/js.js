window.onload = start;

function start(){
    document.getElementById("star1").onclick=function(){
        window.location="star1.html"
        
    }
    document.getElementById("star2").onclick=function(){
        window.location="star2.html"
        
    }
    document.getElementById("star3").onclick=function(){
        window.location="star3.html"
        
    }
   
    var starContainer = document.getElementById("star-container-fill");
    
    var flag = true;
    


    for (var i =1000; i>0; i--){
        var x = Math.floor(Math.random()*(window.innerWidth)/2);
        var y = Math.floor(Math.random()*(window.innerHeight));
        var star =document.createElement("div");
        
        star.classList.add("starfill");

        star.style.position="absolute";
        if (flag){
            star.style.right = x +"px";
            flag=false;
        } else{

            star.style.left = x +"px";
            flag=true;
        }
        
        star.style.top = y +"px";

        starContainer.appendChild(star);
    }
   
    for (var i = 9; i>0; i--){

        var line = document.createElement("div");
        line.classList.add("grid-line");
        line.style.top=i*10+"vh";
        line.addEventListener("mouseover", gridin);
        line.addEventListener("mouseout", gridout);
        starContainer.appendChild(line);

    }
    var line_no = 90
    for (var i = 19; i>0; i--){

        var line = document.createElement("div");
        line.classList.add("grid-horizontal");
        line.style.left=line_no+"vh";
        line.addEventListener("mouseover", gridin);
        line.addEventListener("mouseout", gridout);
        starContainer.appendChild(line);
        line_no-=10;

    }
    
   
}

function star1info(){

    document.getElementById("starinfo").innerHTML= "Rigel";
}

function star1infoout(){
    
    document.getElementById("starinfo").innerHTML= "";
}

function star2info(){

    document.getElementById("starinfo").innerHTML= "Polaris";
}

function star2infoout(){
    
    document.getElementById("starinfo").innerHTML= "";
}

function star3info(){

    document.getElementById("starinfo").innerHTML= "Antares";
}

function star3infoout(){
    
    document.getElementById("starinfo").innerHTML= "";
}

function star4info(){

    document.getElementById("starinfo").innerHTML= "Unknown";
}

function star4infoout(){
    
    document.getElementById("starinfo").innerHTML= "";
}

function gridin(event){
    event.target.style.backgroundColor = "rgba(127, 225, 212, 0.5)";
}
function gridout(event){
    event.target.style.backgroundColor = "rgba(127, 225, 212, 0.1)";
}