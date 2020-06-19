(function(){

//-------- variables section---------//
var basket=document.getElementById("basket");

var egg1=document.getElementById("egg1-img");
var egg2=document.getElementById("egg2-img");
var egg3=document.getElementById("egg3-img");
var brokenEgg2=document.getElementById("broken2");
var brokenEgg=document.getElementById("broken");
var brokenEgg3=document.getElementById("broken3");
var pos=100;
var score=0;
var dispalyScore=document.getElementById("score");
var life=10;
var lifeEgg=document.getElementById("life");
var startGame=document.getElementById("start-game");
var play=document.getElementById("play");
var dispalyScore1=document.getElementById("score-show")
var playAgian=document.getElementById("again")
var againBtn=document.getElementById("play-again");
var finalScore=document.getElementById("final-score");
var gameAudio=document.getElementById("happy-chicken");
var gameOverAudio=document.getElementById("game-over");
var scoreAudio=document.getElementById("score-sound");
//-----------function section-----//

// start game
play.addEventListener("click",startplay)


//to move basket
againBtn.addEventListener("click",toplayAgain)



//function to start game

function startplay(){

   gameAudio.play();
   startGame.style.display="none";
document.addEventListener("mousemove",function(e){
    basket.style.left=e.clientX;
   
})

move();




//function to move egg
function move(){
    egg1.style.top=pos+"px";
    egg2.style.top=pos+"px";
    egg3.style.top=pos+"px"
    if(pos>screen.height){
        pos=100;
    }
    else{speedEgg();
        speedEgg2();
        speedEgg3();
    
    requestAnimationFrame(move);
    scope();
    scope2();
    scope3();
    
}}

//end move egg
//start scope function
function scope(){

    var basketRect=basket.getBoundingClientRect();
    
var basketLeft=basketRect.left;
var basketRight=basketRect.right;
var basketTop=basketRect.top;
var basketBottom=basketRect.bottom;
 
var egg1Rect=egg1.getBoundingClientRect();
var egg1bottom=egg1Rect.bottom;
var egg1left=egg1Rect.left;
var egg1right=egg1Rect.right;


if(egg1bottom>basketTop&&egg1bottom<basketBottom&&egg1left>=basketLeft&&egg1right<=basketRight)
   {
  
 eggCatch();
    
    }
    else if(egg1bottom>basketTop){
    
    
        eggbroken();
    }

     

}
// scope for egg2
function scope2(){

    var basketRect=basket.getBoundingClientRect();
    
var basketLeft=basketRect.left;
var basketRight=basketRect.right;
var basketTop=basketRect.top;
var basketBottom=basketRect.bottom;
 


var egg2Rect=egg2.getBoundingClientRect();
var egg2bottom=egg2Rect.bottom;
var egg2left=egg2Rect.left;
var egg2right=egg2Rect.right;
if(egg2bottom>basketTop&&egg2bottom<basketBottom&&egg2left>=basketLeft&&egg2right<=basketRight)
   {
  
 eggCatch();
    
    }
    else if(egg2bottom>basketTop){
    
    
        eggbroken2();
    }

     

}

//scope egg3
function scope3(){

    var basketRect=basket.getBoundingClientRect();
    
var basketLeft=basketRect.left;
var basketRight=basketRect.right;
var basketTop=basketRect.top;
var basketBottom=basketRect.bottom;
 


var egg3Rect=egg3.getBoundingClientRect();
var egg3bottom=egg3Rect.bottom;
var egg3left=egg3Rect.left;
var egg3right=egg3Rect.right;
if(egg3bottom>basketTop&&egg3bottom<basketBottom&&egg3left>=basketLeft&&egg3right<=basketRight)
   {
  
 eggCatch();
    
    }
    else if(egg3bottom>basketTop){
    
    
        eggbroken3();
    }

     

}









//functiom to score
function eggCatch(){
  pos=100;  
score++;
scoreAudio.play();
dispalyScore.innerHTML=score;
dispalyScore1.innerHTML=score;
finalScore.innerHTML=score;
}

// egg broken1
function eggbroken(){
    if(life<=0){
        playAgian.style.display="block";
        gameAudio.pause()
        gameOverAudio.play();
       
    }
    else{
    brokenEgg.style.display="block";
    
    pos=100;
    life--;
    lifeEgg.innerHTML=  life;
setTimeout(function(){
    brokenEgg.style.display="none";
    
},1000)}

   
}
// function to egg2brocken 
function eggbroken2(){
    if(life<=0){
        playAgian.style.display="block";
        
       
    }
    else{
    brokenEgg2.style.display="block";
    
    pos=100;
    life--;
    lifeEgg.innerHTML=  life;
setTimeout(function(){
    brokenEgg2.style.display="none";
    
},1000)}

   
}

// function to broken egg3
function eggbroken3(){
    if(life<=1){
        playAgian.style.display="block";
        
       
    }
    else{
    brokenEgg3.style.display="block";
    
    pos=100;
    life--;
    lifeEgg.innerHTML=  life;
setTimeout(function(){
    brokenEgg3.style.display="none";
    
},1000)}

   
}







}
function toplayAgain(){
    location.reload();
}

function speedEgg(){
    if(score<5){
        pos+=1
    }
   else if (score>=5){
        pos+=2

    }
    else if (5<score<10){
        pos+=3
    }
    else{
        pos+=5
    }
}

function speedEgg2(){
    if(score<5){
        pos+=2
    }
   else if (score>=5){
        pos+=3

    }
    else if (5<score<10){
        pos+=4
    }
    else{
        pos+=5
    }
}


function speedEgg3(){
    if(score<5){
        pos+=2
    }
   else if (score>=5){
        pos+=2

    }
    else if (5<score<10){
        pos+=4
    }
    else{
        pos+=5
    }
}





}());
