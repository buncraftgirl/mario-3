img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;
function setup() {
    video = createCapture(VIDEO);
    video.size(555, 525);

    canvas = createCanvas(555, 525);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('PoaseNet Is Initialized!')
    console.log('Modal Loaded!');
}
function draw() {
    background('#DCFFFB');
    if(noseX<300)
    {
        marioX=marioX-1;
    }
    if (noseX>300)
    {
        marioX=marioX+1;   
}
if(noseY<150)
{
    marioY=marioY-1;
}
image(img,marioX,marioY,40,70)
}
function gotPoses(results)
{
    if(results.lengh > 0)
    {
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+",noseY="+noseY);
        console.log(results);
    }
}