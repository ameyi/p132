random = ""
status1 = ""
function preload(){
    random = loadImage("office.jpeg")
}
function setup(){
    canvas = createCanvas(640, 480)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function draw(){
    image(random, 0, 0, 640, 480)
    
    
}
function modelLoaded(){
    console.log("Model has been loaded")
    status1 = true;
    objectDetector.detect(random, gotResult)
}
function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
    }
}
function home(){
    window.location.replace("index.html")
}