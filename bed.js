random = ""
status1 = ""
function preload(){
    random = loadImage("bed.jpeg")
}
function setup(){
    canvas = createCanvas(640, 480)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function draw(){
    image(random, 0, 0, 640, 480)
    
    fill("#FF0000")
    stroke("#FF0000")
    text("FAN", 390, 25)

    noFill()
    stroke("#FF0000")
    rect(380, 10, 200, 100)

    fill("#00FF00")
    stroke("#00FF00")
    text("PILLOWS", 70, 185)

    noFill()
    stroke("#00FF00")
    rect(60, 175, 320, 100)

    fill("#0000FF")
    stroke("#0000FF")
    text("PAINTINGS", 50, 60)

    noFill()
    stroke("#0000FF")
    rect(40, 50, 300, 130)

    fill("#00FFFF")
    stroke("#00FFFF")
    text("LAMP", 390, 165)
    
    noFill()
    stroke("#00FFFF")
    rect(380, 155, 50, 90)
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