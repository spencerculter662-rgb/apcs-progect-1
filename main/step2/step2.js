//the button to go back to step 1
function goto_back() {
    window.location.href = '../step1/step1.html'
}
//go to the nexst page
function next() {
    window.location.href = '../end/end.html'
    playsound();//run the sound wen the button is pressed
}

//so the sound runs 

function playsound() {
    const sound = document.getElementById("next_sound");
    sound.play();
}