var data= [
    {
        "stationNo": "C0AD1",
        "stationName": "八里",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "C0AD0",
        "stationName": "三芝",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "C0AD4",
        "stationName": "土城",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "318",
        "stationName": "大安福州山",
        "recTime": "202204271602",
        "rain": 0
    },
    {
        "stationNo": "01A17",
        "stationName": "坪林",
        "recTime": "201911130140",
        "rain": 0
    },
    {
        "stationNo": "C0AD3",
        "stationName": "蘆洲",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "C0AD5",
        "stationName": "鶯歌",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "01A21",
        "stationName": "大豹",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "125",
        "stationName": "中正橋",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "01A43",
        "stationName": "福山",
        "recTime": "202204271600",
        "rain": 0
    },
    {
        "stationNo": "01A44",
        "stationName": "大桶山",
        "recTime": "202204271600",
        "rain": 0
    }
]
for(var i=0;i<11;i++){
    console.log(data[i].stationName,data[i].stationNo,data[i].recTime,data[i].rain)
    $("#row").append($(
        "<tr>"+
        "<td>"+data[i].stationName+"("+data[i].stationNo+")</td>"+
        "<td>"+data[i].recTime.substring(0,4)+"年"+data[i].recTime.substring(4,6)+"月"+data[i].recTime.substring(6,8)+"日"+data[i].recTime.substring(8,10)+"點"+data[i].recTime.substring(10,12)+"分"+"</td>"+
        "<td>"+data[i].rain +"</td>"+
        "</tr>"
        
    ))
}
