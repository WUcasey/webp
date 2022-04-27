setInterval(function myfuntion(){
    var timeclick= new Date()
    var second =timeclick.getSeconds()
    var minute =timeclick.getMinutes()
    var hour =timeclick.getHours()
    document.getElementById("time").innerHTML= "<h2>"+hour+":"+minute+":"+second+"</h2>"

}
,1000)
