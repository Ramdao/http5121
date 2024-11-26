window.onload=start;

function start(){
    
    var sky = document.getElementById("sky");
    var sun = document.getElementById("sun");
   
    flag=true;
    document.getElementById("btn").onclick = function(){
        if(flag){  
        sky.style.animationPlayState="paused";
        sun.style.animationPlayState="paused";
        flag=false;
        } else{
            sky.style.animationPlayState="running";
            sun.style.animationPlayState="running";
            flag=true;
        }
            
        }
    }
