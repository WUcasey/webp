var context = document.getElementById('context');
const log = document.getElementById('log');
document.addEventListener('keydown', logKey);
let a= new Array();
let insertStr = (soure,start, newStr) => {
    return soure.slice(0, start) + newStr + soure.slice(start)
}
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
            log.textContent = insertStr(log.textContent,0,ch) ;
        }   
    }
    a.push(stime.getTime());
    var g;
    g = log.innerText.charAt(log.textContent.length-1);
    if(e.key==g)
    {
        log.innerText= log.innerText.substring(0,log.textContent.length-1)
    }   
}


