var leng = document.getElementsByClassName('length')[0].innerHTML,
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    minusBtn = 'minus',
    plusBtn = 'plus',
    timeOut;
    
//Click on minus button
function minus() {

    if (leng > 1) {
        
        leng = parseInt(leng) - 1;
        document.getElementsByClassName('length')[0].innerHTML = leng;
        minutes.innerHTML = leng;
        
    }
}

function plus() {
    
    if (leng<60) {
        
        leng = parseInt(leng) + 1;
        document.getElementsByClassName('length')[0].innerHTML = leng;
        minutes.innerHTML = leng;
        
    }
}

//Function that make the buttons + and - disabled or not. When the buttons are disabled have opacity
function disabled(sel, bool, op)  {
    var el = document.getElementsByClassName(sel)[0];
    el.disabled = bool;
    el.style.opacity = op;
    
}
function start() {
    var secInt = parseInt(seconds.innerHTML),
        minInt = parseInt(minutes.innerHTML);
    
    disabled(minusBtn, true, 0.7);
    disabled(plusBtn, true, 0.7);
    
    //Countdown
    if(secInt > 10) {
        
        secInt -= 1;  
        seconds.innerHTML = secInt;
        
    } else if(secInt > 0) {
        
        secInt -= 1;
        seconds.innerHTML = '0' + secInt;
        
    
    } else {
 
        
        if (minInt == 0) {
            
            //minutes.innerHTML = '0' + minInt;
            clearTimeout(timeOut);            
            
        } else {
        
            secInt = 60;
            seconds.innerHTML = secInt - 1;
            minInt -= 1;
            minutes.innerHTML = '0' + minInt;
            
        }
   
    }    

    
    timeOut = setTimeout(start, 1000);
}

function reset()  {
    
    disabled(minusBtn, false, null);
    disabled(plusBtn, false, null);
    
    minutes.innerHTML = leng;
    seconds.innerHTML = '00';
    
    clearTimeout(timeOut);
}
