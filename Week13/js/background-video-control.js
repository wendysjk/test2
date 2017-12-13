var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");
function vidFade() {
vid.classList.add("stopfade");
}

vid.addEventListener('ended', function() {

// only functional if "loop" is removed

vid.pause();

// to capture IE10

vidFade();

});

pauseButton.addEventListener("click", function() {
vid.classList.toggle("stopfade");
if (vid.paused) {

vid.play();
pauseButton.innerHTML = "pause";

} else {

vid.pause();

 pauseButton.innerHTML = "paused";

}

})
$(function() {
   var audio = $("audio")[0];
   var controls = {
     "music-on": "play",
     "music-off": "pause"
   };   
   function playPause(e) {
     e.preventDefault();
     audio[controls[this.id]]()
   }
   $("#music-on, #music-off").click("playPause");
 });

