// hier bevinden alle events bij de arena
document.addEventListener('keydown', event => {
    if (event.code === "KeyP") {
        bend_1()
    } // als deze toets word ingedrukt word deze specifieke functie afgespeelt
});
document.addEventListener('keydown', event => {
    if (event.code === "KeyZ") {
        bend_2()
    }
});
document.addEventListener('keydown', event => {
    if (event.code === "KeyY") {
        bend_3()
    }
});
document.addEventListener('keydown', event => {
    if (event.code === "KeyL") {
        bend_4()
    }
});
document.addEventListener('keydown', event => {
    if (event.code === "KeyD") {
        bend_5()
    }
});

//scroll functies
guideButton.addEventListener('click', scroll);
guideButton.addEventListener('dblclick', done_scroll);