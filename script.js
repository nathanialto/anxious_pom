var i = 0;
var n = 0;
var s = 0;
var t = 0;
var up_audio = new Audio('up_audio.wav');
var down_audio = new Audio('down_audio.wav');
var left_audio = new Audio('left_audio.wav');
var right_audio = new Audio('right_audio.wav');

var txt = `You may be feeling stressed or unfocused right now.
            The whole world is probably spinning around you. 
            I want you to take four deep breaths in and out. 
            Think of something that gives you comfort and focus on it. 
            Think about why it brings you comfort and imagine that it
            and you are the only thing in the world. Take another deep breath.
            Return to reality. Feel the ground below you and feel it anchoring you. 
            You should feel better now. If not, try another color dough.`; /* The text */
var speed_up = 23;
var speed_left = 60;
var speed_right = 70;
var speed_down = 60; /* The speed/duration of the effect in milliseconds */
function typeWriter_up() {
    right_audio.pause();
    down_audio.pause();
    left_audio.pause();
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";
    document.getElementById("down").style.display = "none";
    if (i < txt.length) {
        document.getElementById("up").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter_up, speed_up);
    }}

var txt_left = `You may have felt uncomfortable or overly nervous in a social situation.
                I just want to left you know that no matter what anyone else thinks or feels, 
                you are you and you can't change that. 
                All you can do is try to improve your communication and be a kind, caring person.
                Try to take space to think and if you need to, apologize to anyone you may have harmed.
                At the end of the day, no one is as focused and critical of you, as you are to yourself.
                So stay grounded! Try another color dough, if needed.
                `
function typeWriter_left() {
    right_audio.pause();
    up_audio.pause();
    down_audio.pause();
    document.getElementById("up").style.display = "none";
    document.getElementById("right").style.display = "none";
    document.getElementById("down").style.display = "none";
    if (n < txt_left.length) {
        document.getElementById("left").innerHTML += txt_left.charAt(n);
        n++;
        setTimeout(typeWriter_left, speed_left);
    }}

var txt_right = `Missing home? This is a super normal feeling at any age.
                Home can mean many different things, for different people
                and it is natural to miss our loved ones and what brings us
                comfort. If you want, take some time to call someone who reminds
                you of home or bring a little piece of home into your life here.
                Just remember you can rely on other people and be independent
                at the same time. Take time to breathe or just not be productive.
                Try another color dough, if this doesn't help out. 
                `
function typeWriter_right() {
    down_audio.pause();
    up_audio.pause();
    left_audio.pause();
    document.getElementById("left").style.display = "none";
    document.getElementById("up").style.display = "none";
    document.getElementById("down").style.display = "none";
    if (s < txt_right.length) {
        document.getElementById("right").innerHTML += txt_right.charAt(s);
        s++;
        setTimeout(typeWriter_right, speed_right);
    }}

var txt_down = `Just want reassurance? That is perfectly fine. 
                It is normal to feel insecure at times,
                but it is important to know that you are an amazing, 
                talented, and competent person. 
                And, you have people who care deeply about you.
                If you are feeling insecure now, just know it is temporary.
                You just need to get a little perspective
                and take a break from what is stressing you out. 
                If you need more help, try another color dough. 
                `
function typeWriter_down() {
    right_audio.pause();
    up_audio.pause();
    left_audio.pause();
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";
    document.getElementById("up").style.display = "none";
    if (t < txt_down.length) {
        document.getElementById("down").innerHTML += txt_down.charAt(t);
        t++;
        setTimeout(typeWriter_down, speed_down);
    }}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        up_audio.play();
        document.getElementById("up").style.display = "block";
        typeWriter_up();
    }
    else if (e.keyCode == '40') {
        down_audio.play();
        document.getElementById("down").style.display = "block";
        typeWriter_down();
    }
    else if (e.keyCode == '37') {
        left_audio.play();
        document.getElementById("left").style.display = "block";
        typeWriter_left();
    }
    else if (e.keyCode == '39') {
        right_audio.play();
        document.getElementById("right").style.display = "block";
        typeWriter_right();
    }

}



function up(elem) {
    document.getElementById("up").style.display = "block";
    document.getElementById("up_pom").style.display = "block";
}

