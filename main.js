x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

recognition.onresult = function(event) {
  console.log(event);
  var content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = " The Speech has been recognised as:" + content;
  if(content=="circle")
  {
  x = Math.floor(Math.random() * 900);
  y = Math.floor(Math.random() * 600);
  document.getElementById("status").innerHTML = "Started drawing apple";
  draw_apple = "set";
  }
  }
  function setup() {
  canvas = createCanvas(900,600)
  }
  
  function draw() {
  if(draw_apple == "set") 
  {
  radius = Math.floor(Math.random() * 100);
  circle(x,y,radius);
  document.getElementById("status").innerHTML = " Apple is drawn.";
  draw_apple = ""
  }
  }