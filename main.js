noseX =0;
noseY =0;
difference =0;
leftWristX =0;
rightWristX =0;
function setup()
{
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
console.log("Model_is_loaded");
}

function gotPoses(results)
{
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " +noseX +"noseY = "+noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX-rightWristX);
console.log("leftWristX = "+leftWristX +"rightWristX = "+rightWristX +"difference = "+difference);
}
}

function draw()
{
background("grey");
fill("red");
stroke("red");
square(noseX,noseY,difference);
document.getElementById("square_size").innerHTML = "Width and height of the name is "+difference+"px";

}