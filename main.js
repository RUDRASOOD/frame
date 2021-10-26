function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

 
}

function draw() {
    fill("red");
    stroke("red")
    square(50, 50, 60);
    square(50, 400, 60);
    square(550, 30, 60);
    square(550, 400, 60);
    image(video, 160, 110, 320, 240);
    fill("blue");
    stroke("blue")
    rect(120, 60, 420, 20);
    rect(120, 420, 420, 20);
    rect(70, 120, 20, 270);
    rect(560, 120, 20, 270);
}

function take_snapshot(){
save('student_name.png');
}

