var ABC={"A":"../HW04/componenet/A.png","B":"../HW04/componenet/B.png","C":"../HW04/componenet/C.png"
,"D":"../HW04/componenet/D.png","E":"../HW04/componenet/E.png","F":"../HW04/componenet/F.png"
,"G":"../HW04/componenet/G.png","H":"../HW04/componenet/H.png","I":"../HW04/componenet/I.png"
,"J":"../HW04/componenet/J.png","K":"../HW04/componenet/K.png","L":"../HW04/componenet/L.png"
,"M":"../HW04/componenet/M.png","N":"../HW04/componenet/N.png","O":"../HW04/componenet/O.png"
,"P":"../HW04/componenet/P.png","Q":"../HW04/componenet/Q.png","R":"../HW04/componenet/R.png"
,"S":"../HW04/componenet/S.png","T":"../HW04/componenet/T.png","U":"../HW04/componenet/U.png"
,"V":"../HW04/componenet/V.png","W":"../HW04/componenet/W.png","X":"../HW04/componenet/X.png"
,"Y":"../HW04/componenet/Y.png","Z":"../HW04/componenet/Z.png"};
var start , end;
start = new Date();
$(document).keydown(function(e){
    end = new Date();
    for(var j=0;j<6;j++)
    {
        var context = document.getElementsByClassName("context").item(j);
        for(var i=0 ; i<(end.getTime()-start.getTime())*1.5/1000;i++)
        {
            var alphabet = String.fromCharCode(Math.floor(Math.random()*26)+65);
            var myImage = new Image(50,35);
            myImage.src = ABC[alphabet];
            var base = context.getElementsByTagName('img')[0];
            context.insertBefore(myImage,base)
        }
    }
    for(var x=0;x<6;x++){
        var context = document.getElementsByClassName("context").item(x);
        var num = context.getElementsByTagName("img").length-1;//把數量transfer to index
        var firstimg = context.getElementsByTagName("img")[num];
        $('img').animate({left:"980px"},35000)
        var reword = String.fromCharCode(e.keyCode);
        var remove = new Image(50,35);
        remove.src = ABC[reword];
        if(remove.src==firstimg.src)    
        {
            context.removeChild(firstimg)
            break;
        }
    }
    start=end;
});
window.setInterval(function(){
    for(var h=0;h<6;h++)
    {
        var context = document.getElementsByClassName("context").item(h);
        var num = context.getElementsByTagName("img").length-1;//把數量transfer to index
        var firstimg = context.getElementsByTagName("img")[num];
        if(firstimg.offsetLeft>1000)
        {
            $("img").stop(true);
            alert("game over");
        }
    }
},1000)
