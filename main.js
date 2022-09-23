rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup() 
{
  video = createCapture(VIDEO);
  video.size(500, 500);
  canvas = createCanvas(500, 500);
  canvas.position(560,150);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw()
{
  if(difference < 500 && difference > 20)
  {
  background("lightblue");
  textSize(difference);
fill(0, 102, 153);
  text("Oi, tudo bem?",  10, 250)
}
}
function modelLoaded()
{
    console.log("O Modelo PoseNet foi Inicializado")
}
function gotPoses(results)
{
if(results.length > 0)
{
    //console.log(results)
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
}
}