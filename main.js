function setup(){
    canvas = createCanvas(700, 525);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}


function draw(){
    fill(0,128,0);
    stroke(0,128,0);
    circle(600, 475, 70);
    circle(100, 50, 70);
    circle(600, 50, 70);
    circle(100, 475, 70);
    fill(128,0,0);
    stroke(128,0,0);
    rect(130,460, 440, 30);
    rect(130, 35, 440, 30);
    rect(85, 80, 30, 365);
    rect(585, 80, 30, 365);
    image(video, 180, 120, 350, 250);
}

