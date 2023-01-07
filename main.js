
objects = [];
status = "";
audio="";

function preload(){
  audio = loadAudio('alert_alert.mp3');
}


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting babie";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
    if(i=0 , i<objects.length , i++){
      document.getElementById("status").innerHTML="baby detected";
      audio.stop();

      else(i>objects.length,i++){
        document.getElementById("status").innerHTML="baby not detected";
            audio.play();
      }
}


  }