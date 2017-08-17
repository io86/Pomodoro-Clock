'use strict';

var leng = document.getElementsByClassName('length')[0].innerHTML,
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    startBtn = document.getElementById('start'),
    pauseBtn = document.getElementById('pause'),
    minusBtn = 'minus',
    plusBtn = 'plus',
    timeOut;
    

//Function, which change the display of buttons Start and Pause in opposite way ('block', 'none')
function display(disOne, disTwo) {
    startBtn.style.display = disOne;
    pauseBtn.style.display = disTwo;
}

//Function that make the buttons + and - disabled or not. When the buttons are disabled have opacity
function disabled(bool, op) {
    var plus = document.getElementById('plus'),
        minus = document.getElementById('minus');
    
    plus.disabled = bool;
    minus.disabled = bool;
    
    plus.style.opacity = op;
    minus.style.opacity = op;
    
}

//Click on minus button
function minus() {

    if (leng > 1) {
        
        leng = parseInt(leng) - 1;
        document.getElementsByClassName('length')[0].innerHTML = leng;
        minutes.innerHTML = leng;
        
    }
}

function plus() {
    
    if (leng < 60) {
        
        leng = parseInt(leng) + 1;
        document.getElementsByClassName('length')[0].innerHTML = leng;
        minutes.innerHTML = leng;
        
    }
}

//Press Start button
function start() {
    var secInt = parseInt(seconds.innerHTML),
        minInt = parseInt(minutes.innerHTML);
    
    disabled(true, 0.7);
    display('none', 'block');
    
    //Countdown
    if (secInt > 10) {
        
        secInt -= 1;
        seconds.innerHTML = secInt;
        
    } else if (secInt > 0) {
        
        secInt -= 1;
        seconds.innerHTML = '0' + secInt;
        
    
    } else {
 
        if (minInt > 10) {
            
            secInt = 60;
            seconds.innerHTML = secInt - 1;
            minInt -= 1;
            minutes.innerHTML = minInt;
            
        } else if (minInt > 0) {
            
            secInt = 60;
            seconds.innerHTML = secInt - 1;
            minInt -= 1;
            minutes.innerHTML = '0' + minInt;
            
        } else {
            
            display('block', 'none');
            disabled(false, null);
            
            clearTimeout(timeOut);
        }
   
    }

    timeOut = setTimeout(start, 1000);
}

//Press Reset button
function reset() {
    
    minutes.innerHTML = leng;
    seconds.innerHTML = '00';
    
    disabled(false, null);
    display('block', 'none');
    
    clearTimeout(timeOut);
}

//Press Pause button
function pause() {
    
    clearTimeout(timeOut);
    display('block', 'none');
    
}