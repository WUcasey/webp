var stationsData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Station/TYMC?%24top=30&%24format=JSON"
var stations = $.getJSON(stationsData)
//console.log(cont)
stations.done(function(station){
    //console.log(station)
    $.each(station,function(i,item){
        //console.log(i,item.StationName.Zh_tw)
        $('#Station').append($('<li> A'+(i+1)+item.StationName.Zh_tw+'</il>').addClass("list-group-item"))
    })
});
var pricesData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=30&%24format=JSON"
var prices = $.getJSON(pricesData)
//console.log(prices)
prices.done(function(price){
    $.each(price,function(i,item){
        if(i<20){
            //console.log(i,item.Fares[0].Price)
            $('#Prices').append($('<li>'+item.Fares[0].Price+'</il>').addClass("list-group-item"))

        }
    })
});
var timesData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON"
var times = $.getJSON(timesData)
console.log(times)
var num=[];
var b=0;
var c=20;
for(var j=0;j<=21;j++)
{
    if(c>0)
    {
        num.push(b)
        b=b+c
        c--
    }
}
times.done(function(time){
    $.each(time,function(i,item){
        if(i<1)
        {
            $.each(num,function(x,num){
                console.log(i,item.TravelTimes[num].RunTime) 
                $('#Times').append($('<li><small> A'+(x+1)+">>A"+(x+2)+"  </small><strong>"+item.TravelTimes[num].RunTime+'</strong></il>').addClass("list-group-item"))
            })
        }
           
    });
});


