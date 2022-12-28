var song
var songIsplay=false
var amp
var music_btn


function preload(){
  song =loadSound("Fiesta Jarocha - Jimena Contreras.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  music_btn = createButton("播音樂")
  music_btn.position(10,10)
  music_btn.size(250, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)

}

function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude()  

}

function draw() {
  background("#b5838d");
  textSize(50)
  text("X:"+mouseX+"Y:"+mouseY,50,50)
  push()
   translate(width/2,height/2)
   fill(0)
   stroke(0)
   ellipse(-200,-200,200)  //左耳
   ellipse(200,-200,200)   //右耳
   ellipse(0,0,400)        //中間大園
   fill("#f5ebe0")
   stroke("#f5ebe0")
   ellipse(55,-55,180,220)  
   ellipse(-55,-55,180,220)
   fill("#f5ebe0")
   arc(0,20,350,350,0,180)  //下弧
   fill(0)
   ellipse(75,-20,30,55)    //右黑眼
   ellipse(-75,-20,30,55)   //左黑眼
   //ellipse(0,50,50,30)      //鼻子
   fill(255)
   ellipse(-75+mouseX/250,-30+mouseY/100,25)//左白眼
   ellipse(75+mouseX/250,-30+mouseY/100,25)//右白眼
  fill(0)
   if(mouseIsPressed)
   {
    ellipse(0,35,50,30)
   }
   else
   {
    ellipse(0,45,50,30)
   }
  pop()
}


function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()
  }
  else{
    song.pause()
    songIsplay = false
  }
}