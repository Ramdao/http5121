window.onload=start;

function start(){
    document.getElementById("button").onclick= change;


    function change(){

        document.getElementById("square").classList.add("rotate");
    }
    
    document.getElementById("square").addEventListener("transitionend", function (){
        document.getElementById("square").classList.remove("rotate");
      });
}


