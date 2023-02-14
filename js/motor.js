var mood = "off";
var blender = document.getElementById('blender');
var soundBlender = document.getElementById('blender-sound');
var buttonBlender = document.getElementById('blender-button-sound');


function control(){
    if (mood == "off"){
        mood  = "on";
        sound();
        blender.classList.add("active");
        //console.log('on');
    }else {
        mood = "off"
        sound();
        blender.classList.remove("active")
        //console.log('off');
        }
}

function sound (){
    if(soundBlender.paused) {
        buttonBlender.play();
        soundBlender.play();
    } else {
        buttonBlender.play();
        soundBlender.pause();
        soundBlender.currentTime = 0;
    }
}