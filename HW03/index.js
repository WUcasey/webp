var context = document.getElementById('context');
const log = document.getElementById('log');
document.addEventListener('keydown', logKey);
let a= new Array();
function logKey(e) {
    var stime ,diff;
    stime = new Date();
    if(a!=NaN)
    {  
        diff=stime.getTime()-a.pop();
        for(var i=0;i<(diff/1000)*2.5;i++)
        {
            var ch;
            var number = Math.floor(Math.random()*26)+97;
            ch = String.fromCharCode( number );
            log.textContent += ` ${ch}`;
        }   
    }
    a.push(stime.getTime());
    var g;
    g = log.innerText.charAt(0);
    if(e.key==g)
    {
        log.innerText= log.innerText.substring(1)
    }   
}


