nosex=0;
nosey=0;
difference=0;
leftwristX=0;
rightwristX=0;

function preload(){

}
function setup(){
canvas=createCanvas(500,500);
canvas.position(600,100);
video=createCapture(VIDEO);
video.size(500,500);
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotpose);
}

function draw(){
    document.getElementById("square_side").innerHTML="Width and Height of the circle is ="+difference+"px";
background('#d8eb34');
fill('#32a895');
stroke('#32a897');
circle(nosex,nosey,difference);
}

function modelloaded(){
    console.log("modelloaded");
}

 function gotpose(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex="+nosex+" ,nosey="+nosey);

leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
}
 }