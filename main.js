song="";
song2="";
LeftWristX="";
LeftWristY="";
RightWristX="";
RightWristY="";
scoreLeftWrist=0;

function preload(){
song=loadSound("blinding_lights.mp3");
song2=loadSound("Imagine_dragons.mp3");
}
function setup(){
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function gotPoses(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
LeftWristX=results[0].pose.LeftWrist.x;
LeftWristY=results[0].pose.LeftWrist.y;
console.log(LeftWristX, LeftWristY);
RightWristX=results.pose.RightWrist.x;
RightWristY=results[0].pose.RightWrist.y;
console.log(RightWristX, RightWristY);
}
}
function modelLoaded(){
console.log("Posenet Is Intialized");
}
function draw(){
image(video,0,0,500,400);
}