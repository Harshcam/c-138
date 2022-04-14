function setup(){
    canvas = Createcanvas(480, 380);
    canvas.center
}

function draw() {
    image(video,0 ,0 , 480, 380);
}

function start(){
    objectdetector = ml5.objectdetcter('cocosd' , modelLoded);
    document.getElementById("status").innerHtml = "status : detecting objects";
}

function modelLoded() {
    console.log("ModelLoaded !");
    status = true
    video = loop();
    video.speed(1);
    video.volume(0);
}
