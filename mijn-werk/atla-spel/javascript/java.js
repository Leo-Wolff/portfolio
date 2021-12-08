// Alle variabelen van home
var teashopButton = document.querySelector('#teashop');
var teashopAudio = new Audio ('audio/iroh.mp3');
var meditateButton = document.querySelector('#meditation');
var benderEntity = document.querySelector('#bender');
var trainerButton = document.querySelector('#trainer');
var trainingAudio = new Audio ('audio/zuko.mp3');
var thirstStat = document.querySelector('#thirst');
// Alle variabelen van de arena
var scrollImg = document.querySelector('#scroll');
var guideButton = document.querySelector('#trainer-guide');

// Alle variabelen op allebei de paginas
var chiStat = document.querySelector('#chi');
var knowledgeStat = 0; // Deze variabelen is verborgen en houd bij hoe ver iemand is in hun training
// sessionStorage word gebruikt om deze statistieken op allebei de paginas te onthouden
knowledgeStat = Number(sessionStorage.getItem("knowledgeStat"));
console.log(knowledgeStat);
chiStat.value = Number(sessionStorage.getItem("chiStat"));

// teashop functies
function drink() {
    console.log('drinking');
    benderEntity.classList.add('hide');
    teashopAudio.play();
    setTimeout (end_drink, 6591);
    thirstStat.value += 25;
}

function end_drink() {
    console.log('done drinking');
    benderEntity.classList.remove('hide');
}

// training functies
function train() {
    if (thirstStat.value < 25) {
        return;
    } // check dat de karakter genoeg dorst heeft om te training
    console.log('training');
    benderEntity.classList.add('hide');
    trainingAudio.play();    
    setTimeout (end_train, 6610);
    thirstStat.value -= 25;
    if (knowledgeStat == 100) {
        return;
    } // 100 is het maximum, dus de karakter kan niks meer nieuws leren
    knowledgeStat += 5;
    sessionStorage.setItem("knowledgeStat", knowledgeStat); // Dit bewaart de variabelen die bij het einde van de functie eruit is gekomen
    console.log(knowledgeStat);
}

function end_train() {
    console.log('done training');
    benderEntity.classList.remove('hide');
}

function meditate() {
    console.log('meditating');
    benderEntity.src = 'img/meditate.png';
    setTimeout (end_meditate, 3000);
    chiStat.value += 25;
    sessionStorage.setItem('chiStat', chiStat.value);
}

function end_meditate() {
    console.log('done meditating');
    benderEntity.src = 'img/bender.png';
}

function bend_done() {
    console.log('finished move');
    benderEntity.src = 'img/bender.png';
}

function bend_1 () {
    if (chiStat.value < 10) {
        return;
    } // check dat de karakter genoeg chi heeft de move te doen
    if (knowledgeStat > 0) {
        chiStat.value -= 5;
    } // als die het kan, gaat er chi ervan af
    if (knowledgeStat == 100) {
        console.log('bending first move, with fire');
        benderEntity.src = 'img/bender-fire-1.png';
        setTimeout (bend_done, 1500);
    } else if (knowledgeStat > 0) {
        console.log('bending first move, no fire');
        benderEntity.src = 'img/bender-move-1.png';
        setTimeout (bend_done, 1500); 
    } else {
        console.log('cannot bend');
        benderEntity.src = 'img/bender.png';
    } // afhankelijk van de kennis van de karakter kan hij of met vuur de complete move doen, of een showcase van de positie, of niks
    sessionStorage.setItem("chiStat", chiStat.value);
}

// dit word herhaald voor de hele bending ritueel
function bend_2 () {
    if (chiStat.value < 10) {
        return;
    }
    if (knowledgeStat > 0) {
        chiStat.value -= 5;
    }
    if (knowledgeStat == 100) {
        console.log('bending first move, with fire');
        benderEntity.src = 'img/bender-fire-2.png';
        setTimeout (bend_done, 1500);
    } else if (knowledgeStat >= 15) {
        console.log('bending first move, no fire');
        benderEntity.src = 'img/bender-move-2.png';
        setTimeout (bend_done, 1500); 
    } else {
        console.log('cannot bend');
        benderEntity.src = 'img/bender.png';
    }
    sessionStorage.setItem("chiStat", chiStat.value);
}

function bend_3 () {
    if (chiStat.value < 10) {
        return;
    }
    if (knowledgeStat > 0) {
        chiStat.value -= 5;
    }
    if (knowledgeStat == 100) {
        console.log('bending first move, with fire');
        benderEntity.src = 'img/bender-fire-3.png';
        setTimeout (bend_done, 1500);
    } else if (knowledgeStat >= 35) {
        console.log('bending first move, no fire');
        benderEntity.src = 'img/bender-move-3.png';
        setTimeout (bend_done, 1500); 
    } else {
        console.log('cannot bend');
        benderEntity.src = 'img/bender.png';
    }
    sessionStorage.setItem("chiStat", chiStat.value);
}

function bend_4 () {
    if (chiStat.value < 10) {
        return;
    }
    if (knowledgeStat > 0) {
        chiStat.value -= 5;
    }
    if (knowledgeStat == 100) {
        console.log('bending first move, with fire');
        benderEntity.src = 'img/bender-fire-4.png';
        setTimeout (bend_done, 1500);
    } else if (knowledgeStat >= 65) {
        console.log('bending first move, no fire');
        benderEntity.src = 'img/bender-move-4.png';
        setTimeout (bend_done, 1500); 
    } else {
        console.log('cannot bend');
        benderEntity.src = 'img/bender.png';
    }
    sessionStorage.setItem("chiStat", chiStat.value);
}

function bend_5 () {
    if (chiStat.value < 10) {
        return;
    }
    if (knowledgeStat > 0) {
        chiStat.value -= 5;
    }
    if (knowledgeStat == 100) {
        console.log('bending first move, with fire');
        benderEntity.src = 'img/bender-fire-5.png';
        setTimeout (bend_done, 1500);
    } else if (knowledgeStat >= 100) {
        console.log('bending first move, no fire');
        benderEntity.src = 'img/bender-move-5.png';
        setTimeout (bend_done, 1500); 
    } else {
        console.log('cannot bend');
        benderEntity.src = 'img/bender.png';
    }
    sessionStorage.setItem("chiStat", chiStat.value);
}

// dit word vooraf gedaan zodat ALS de scroll te zien is dat het de class toevoegd
function done_scroll () {
    scrollImg.classList.add('hide');
}

function scroll () {
    if (knowledgeStat == 100) {
        scrollImg.classList.remove('hide');
        scrollImg.src= 'img/scroll-5.png';
    } else if (knowledgeStat >= 65) {
        scrollImg.classList.remove('hide');
        scrollImg.src= 'img/scroll-4.png';
    } else if (knowledgeStat >= 35) {
        scrollImg.classList.remove('hide');
        scrollImg.src= 'img/scroll-3.png';
    } else if (knowledgeStat >= 15) {
        scrollImg.classList.remove('hide');
        scrollImg.src= 'img/scroll-2.png';
    } else if (knowledgeStat > 0) {
        scrollImg.classList.remove('hide');
        scrollImg.src= 'img/scroll-1.png';
    } else {
        scrollImg.classList.remove('hide');
        scrollImg.src= 'img/scroll-0.png';
    }
}