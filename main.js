
var paperclipCount = 0;
var opsCount = 0;
var creatCount = 0;
var clipperSpeed = 0;
var clipperVol = 0;

//DOM element mapping
let paperclipNumElem = document.getElementById("paperclip-num");
let makePaperclipBtn = document.getElementById("make-paperclip-btn");

let projectsTabBtn = document.getElementById("projects-tab-btn");
let statsTabBtn = document.getElementById("stats-tab-btn");


//counters
var start = Date.now();
var paperclipTimer = setInterval(function() {
    var delta = Date.now() - start; // milliseconds elapsed since start
    //return (Math.floor(delta / 1000)); // in seconds
    paperclipCount += clipperVol;
    paperclipNumElem.innerHTML = paperclipCount;
}, 1000 - clipperSpeed);


//event listeners
makePaperclipBtn.addEventListener("click", () => {
    paperclipCount ++;
    paperclipNumElem.innerHTML = paperclipCount;
});