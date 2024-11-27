var msec = document.getElementById("sec");
var sec = document.getElementById("min");
var min = document.getElementById("hrs");
var milli = 0;
var seco = 0;
var minu = 0;
var counter = () => {
    milli++;
    if (milli == 59) {
        seco++;
        milli = 0;
    }
    if (seco == 60) {
        minu++;
        seco = 0;
    }
    if (milli < 10) {
        msec.innerText = "0" + milli;
    } else {
        msec.innerText = milli;
    }
    if (seco < 10) {
        sec.innerText = "0" + seco;
    } else {
        sec.innerText = seco;
    }
    if (minu < 10) {
        min.innerText = "0" + minu;
    } else {
        min.innerText = minu;
    }
};

var stop = () => {
    clearInterval(res);
};
var start = () => {
    res = setInterval(counter, 15);
};

var reset = () => {
    milli = 0;
    seco = 0;
    minu = 0;
    msec.innerText = "00";
    sec.innerText = "00";
    min.innerText = "00";
    clearInterval(res);
};