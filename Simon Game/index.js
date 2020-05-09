gamePattern=[];
userPattern=[];
gameColor=["green","red","yellow","blue"];
level=0;
i=0;


function nextSeq(){
  rand=Math.floor(Math.random()*4);
  if(rand==4){rand=3;}
  $("h1").text("Level "+level);
  gamePattern.push(gameColor[rand]);
  playSound(gameColor[rand]);
  $("#"+gameColor[rand]).fadeOut(100).fadeIn(100);
  level++;
  userPattern=[];
  i=0;
}

$(document).keypress(function(){
  setTimeout(function(){
    nextSeq();},1000);
});

function playSound(button){
  aud=new Audio("sounds/"+button+".mp3");
  aud.play();
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}

function test(b){
  userPattern.push(b);
  console.log(userPattern);
  console.log(gamePattern);
  console.log(userPattern[i]);
  console.log(gamePattern[i]);
  console.log(i);
  console.log("gamePattern.len= "+gamePattern.length);
  if(userPattern[i]==gamePattern[i]&&i==gamePattern.length-1){
    console.log("In if");
    ChangeOver(0);
  }
  else if(userPattern[i]!=gamePattern[i]){
    console.log("In else if");
    ChangeOver(-1);
  }
  else{
    i++;
  }
}

function ChangeOver(status){
  if(status==0){
    $("h1").text("Congratulations!!!");
    setTimeout(function(){
      nextSeq();},1000);
  }
  else if (status==-1) {
    gamePattern=[];
    $("h1").text("Game Over, Press Any key to restart");
    level=0;
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

  }
}

$(".btn").click(function(){
  // userClicked=this.id;
  playSound(this.id);
  animatePress(this.id);
  test(this.id);
});
