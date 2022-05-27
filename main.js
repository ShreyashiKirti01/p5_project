function preload(){

}

function setup(){
  img=  loadImage("background.jpg")
canvas= createCanvas(500,500);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(img,10,100,500,500)
image(video, 150, 230, 200, 200);
fill("red");
}

function take_snapshot(){

}