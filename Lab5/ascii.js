function animationOnChange() {
    document.getElementById("text-area").value = "";
    var x = document.getElementById("animation").value;
    console.log(x);
    document.getElementById("text-area").value = ANIMATIONS[x];
}

let currentAnimation;
let customeAnimation = ["Blank", "Exercise", "Juggler", "Bike", "Dive"];
var myInterval;
let t;
function startAnimation() {
    t = 250;
    currentAnimation = document.getElementById("text-area").value;

    document.getElementById("stop").disabled = false;

    let count = 0;

    myInterval = setInterval(function () {

        document.getElementById("text-area").value = ANIMATIONS[customeAnimation[count++]];

        if (count == 5) count = 0;

    }, speedChange());

}

function speedChange() {
    const cb = document.querySelector('#turbo');
    if (cb.checked == true) {
        return 50;
    }
    return 250;
}

function stopAnimation() {

    clearInterval(myInterval);

    document.getElementById("stop").disabled = true;

    document.getElementById("text-area").value = currentAnimation;

}

function fontSizeOnChange() {
    let fontSize = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = fontSize;
}




