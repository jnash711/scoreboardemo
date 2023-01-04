let homeCount = 0;
let changeCount = document.getElementById("home--btn");

function plusOne(){
    homeCount += 1;
    changeCount.textContent = homeCount;
}

function plusTwo(){
    homeCount += 2;
    changeCount.textContent = homeCount;
}

function plusThree(){
    homeCount += 3;
    changeCount.textContent = homeCount;
}
let guestCount = 0;
let changeGuestCount = document.getElementById("guest--btn")

function plusOneG(){
    guestCount += 1;
    changeGuestCount.textContent = guestCount;
}
function plusTwoG(){
    guestCount += 2;
    changeGuestCount.textContent = guestCount;
}
function plusThreeG(){
    guestCount += 3;
    changeGuestCount.textContent = guestCount;
}