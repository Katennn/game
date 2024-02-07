const dog = document.getElementById("dog")
const fire = document.getElementById("fire")

document.addEventListener("keydown", function(event){
    jump();
});

document.addEventListener("touchstart", function(event) {
    jump();
});

function jump () {
    if (dog.classList !="jump") {
        dog.classList.add("jump")
    }
    setTimeout( function()  {
        dog.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let dogTop = parseInt(window.getComputedStyle(dog).getPropertyValue("top"));
    let fireLeft = parseInt(window.getComputedStyle(fire).getPropertyValue("left"));

    if (fireLeft < 175 && fireLeft > -50 && dogTop >= 200) {
        alert("KIRILL, I STILL LOVE YOU DESPITE THE FACT THAT YOU LOST IN THIS GAME!                  P.S. YOUR KATE♡")
        location.reload()
    }
}, 50)
