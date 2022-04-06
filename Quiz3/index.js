const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e) {
    if(65<=e.keyCode&&e.keyCode<=112)
    {
        log.textContent += ` ${e.key}`;
    }
 
}